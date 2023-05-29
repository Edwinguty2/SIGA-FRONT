import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Crear from "./componentes/paginas/Crear";
import { CursoLibre } from './componentes/paginas/CursoLibre';
import { Navbar } from "./componentes/navegacion/Navbar";
import { Inicio } from "./componentes/paginas/Inicio";
import { useState } from 'react';

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
		const nuevoCurso = {
			materia: asignatura,
			facultad: facultad,
			id: id,
			profesor: "",
			estudiantes: []
		}
		setCursos((cursos) => [...cursos, nuevoCurso])
	}



	return (
		<>
			<div className='SigaApp'>
				<Router>
					<Navbar />
					<Switch>
						<Route path='/' exact render={() => <Inicio facultades={facultades} />} />
						<Route path='/crear' render={(props) => (<Crear {...props} agregarEstudiante={(estudiante, facultad) => { agregarEstudiante(estudiante, facultad) }} agregarProfesor={(profesor, facultad) => { agregarProfesor(profesor, facultad) }} agregarAsignatura={(asignatura, facultad) => { agregarAsignatura(asignatura, facultad) }} />)} />
						<Route path='/curso-libre' render={(props) => (<CursoLibre {...props} cursos={cursos} />)} />
					</Switch>
				</Router>
			</div>
		</>
	);
}
