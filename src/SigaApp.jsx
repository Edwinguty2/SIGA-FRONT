import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Crear from "./componentes/paginas/Crear";
import { CursoLibre } from './componentes/paginas/CursoLibre';
import { Navbar } from "./componentes/navegacion/Navbar";
import { Inicio } from "./componentes/paginas/Inicio";
import { CrearCurso } from "./componentes/paginas/CrearCurso";
import { useState } from 'react';
import { postProfesor } from "./peticiones/postProfesores";
import { postEstudiantes } from "./peticiones/postEstudiantes";
import { getAsignaturas } from "./peticiones/getAsignaturas";
import { getCursos } from "./peticiones/getCursos";
import { getCursosLibres } from "./peticiones/getCursosLibres";

export const SigaApp = () => {
	const [cursos, setCursos] = useState([])
	const [facultades, setFacultades] = useState({
		eica: {
			estudiantes: [],
			profesores: [],
			asignaturas: []
		},
		ingenieria: {
			estudiantes: [],
			profesores: [],
			asignaturas: []
		},
		derecho: {
			estudiantes: [],
			profesores: [],
			asignaturas: []
		},
		comunicacion: {
			estudiantes: [],
			profesores: [],
			asignaturas: []
		},
		salud: {
			estudiantes: [],
			profesores: [],
			asignaturas: []
		},
		educacion: {
			estudiantes: [],
			profesores: [],
			asignaturas: []
		}
	});


	const agregarEstudiante = (estudiante, facultad) => {
		const { nombre, id } = estudiante;
		postEstudiantes(nombre, id, facultad)
		setFacultades((facultades) => {

			const nuevasFacultades = { ...facultades };
			const facultadEspecifica = nuevasFacultades[facultad.toLowerCase()];
			const nuevaListaEstudiantes = [...facultadEspecifica.estudiantes, estudiante];
			facultadEspecifica.estudiantes = nuevaListaEstudiantes;
			console.log(nuevasFacultades)
			return nuevasFacultades;
		});
	}
	const agregarProfesor = (profesor, facultad) => {
		const { nombre, id } = profesor;
		postProfesor(nombre, id, facultad)
		setFacultades((facultades) => {
			const nuevasFacultades = { ...facultades };
			const facultadEspecifica = nuevasFacultades[facultad.toLowerCase()];
			const nuevaListaProfesores = [...facultadEspecifica.profesores, profesor];
			facultadEspecifica.profesores = nuevaListaProfesores;
			console.log(nuevasFacultades)
			return nuevasFacultades;
		});
	}
	const agregarAsignatura = (asignatura, facultad) => {
		getAsignaturas(asignatura, facultad);
		setFacultades((facultades) => {
			const nuevasFacultades = { ...facultades };
			const facultadEspecifica = nuevasFacultades[facultad.toLowerCase()];
			const nuevaListaAsignaturas = [...facultadEspecifica.asignaturas, asignatura];
			facultadEspecifica.asignaturas = nuevaListaAsignaturas;
			console.log(nuevasFacultades)
			return nuevasFacultades;
		});
	}

	const agregarCurso = (asignatura, facultad) => {
		const id = Math.floor(Math.random() * 1000);
		getCursosLibres(asignatura, facultad, id);
		const nuevoCurso = {
			materia: asignatura,
			facultad: facultad,
			id: id,
			profesor: "",
			estudiantes: []
		}
		setCursos((cursos) => [...cursos, nuevoCurso])
	}
	const editarCurso = (listaEstudiantes, profesor, id) => {
		getCursos(listaEstudiantes, profesor, id);
		setCursos(cursos.map((curso) => {
			if (curso.id === id) {
				return {
					materia: curso.materia,
					facultad: curso.facultad,
					id: id,
					profesor: profesor,
					estudiantes: listaEstudiantes
				}
			} else {
				return curso
			}
		}));
	}

	const extraeEstudiantes = () => {
		const estudiantes = [];
		Object.values(facultades).forEach((facultad) => {
			estudiantes.push(...facultad.estudiantes);
		});
		return estudiantes;
	};
	const extraeProfesores = () => {
		const profesores = [];
		Object.values(facultades).forEach((facultad) => {
			profesores.push(...facultad.profesores);
		});
		return profesores;
	};

	return (
		<>
			<div className='SigaApp'>
				<Router>
					<Navbar />
					<Switch>
						<Route path='/' exact render={() => <Inicio facultades={facultades} cursos={cursos} />} />
						<Route path='/crear' render={(props) => (<Crear {...props} agregarEstudiante={(estudiante, facultad) => { agregarEstudiante(estudiante, facultad) }} agregarProfesor={(profesor, facultad) => { agregarProfesor(profesor, facultad) }} agregarAsignatura={(asignatura, facultad) => { agregarAsignatura(asignatura, facultad) }} />)} />
						<Route path='/crear-curso-libre' render={(props) => <CrearCurso{...props} agregarCurso={(curso, facultad) => { agregarCurso(curso, facultad); }} facultades={facultades} />} />
						<Route path='/cursos-libres' render={(props) => (<CursoLibre {...props} listaCursos={cursos} extraeEstudiantes={extraeEstudiantes} extraeProfesores={extraeProfesores} editarCurso={(listaEstudiantes, profesor, id) => editarCurso(listaEstudiantes, profesor, id)} />)} />
					</Switch>
				</Router>
			</div>
		</>
	);
}
