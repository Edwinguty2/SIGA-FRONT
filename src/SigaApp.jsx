import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Crear from "./componentes/paginas/Crear";
import { CursoLibre } from './componentes/paginas/CursoLibre';
import { Navbar } from "./componentes/navegacion/Navbar";
import { Inicio } from "./componentes/paginas/Inicio";
import { useState } from 'react';

export const SigaApp = () => {

	const [facultades, setFacultades] = useState({
		ingenieria: {
			estudiantes: [],
			profesores: [],
			asignaturas: []
		},
		medicina: {
			estudiantes: [],
			profesores: [],
			asignaturas: []
		},
		comunicacion: {
			estudiantes: [],
			profesores: [],
			asignaturas: []
		},
		educacion: {
			estudiantes: [],
			profesores: [],
			asignaturas: []
		},
		derecho: {
			estudiantes: [],
			profesores: [],
			asignaturas: []
		}
	});


	const agregarEstudiante = (estudiante, facultad) => {
		setFacultades((facultades) => {

			const nuevasFacultades = { ...facultades };


			const facultadEspecifica = nuevasFacultades[facultad];

			const nuevaListaEstudiantes = [...facultadEspecifica.estudiantes, estudiante];


			facultadEspecifica.estudiantes = nuevaListaEstudiantes;

			return nuevasFacultades;
		});

	}
	// const editarEstudiante = (estudianteEditado) => {
	// 	setEstudiantes(estudiantes.map((estudiante) => {
	// 		if (estudianteEditado.id === estudiante.id) {
	// 			return estudianteEditado;
	// 		} else {
	// 			return estudiante
	// 		}
	// 	}));

	// }

	return (
		<>
			<div className='SigaApp'>
				<Router>
					<Navbar />
					<Switch>
						<Route path='/' exact component={Inicio} />
						<Route path='/crear' render={(props) => ( <Crear {...props} agregarEstudiante={(estudiante) => { agregarEstudiante(estudiante) }} /> )}/>
						<Route path='/curso-libre' component={CursoLibre} />
					</Switch>
				</Router>
			</div>
		</>
	);
}
