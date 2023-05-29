import React, { useState } from 'react';

export const CursoLibre = ({ listaCursos, extraeEstudiantes, extraeProfesores, editarCurso }) => {
	const [cursoSeleccionado, setCursoSeleccionado] = useState(null);
	const [profesorSeleccionado, setProfesorSeleccionado] = useState('');
	const [estudianteSeleccionado, setEstudianteSeleccionado] = useState('');
	const initialCursos = listaCursos && listaCursos.length ? listaCursos : [];
	const [cursos, setCursos] = useState(initialCursos);

	const estudiantesDisponibles = extraeEstudiantes();
	const profesoresDisponibles = extraeProfesores();

	const hayDatosDisponibles =
		listaCursos &&
		extraeEstudiantes &&
		extraeProfesores &&
		estudiantesDisponibles &&
		profesoresDisponibles;

	const handleCursoClick = (curso) => {
		setCursoSeleccionado(curso);
		setProfesorSeleccionado(curso.profesor || '');
	};

	const handleProfesorChange = (e) => {
		setProfesorSeleccionado(e.target.value);
	};

	const handleEstudianteChange = (e) => {
		const estudianteId = parseInt(e.target.value);
		const estudiante = estudiantesDisponibles.find((est) => est.id === estudianteId);
		setEstudianteSeleccionado(estudiante);
	};

	const handleAgregarEstudiante = (e) => {
		e.preventDefault();
		if (
			estudianteSeleccionado &&
			cursoSeleccionado &&
			!cursoSeleccionado.estudiantes.find((e) => e.id === estudianteSeleccionado.id)
		) {
			const cursosActualizados = cursos.map((curso) => {
				if (curso.id === cursoSeleccionado.id) {
					const estudiantesActualizados = [...curso.estudiantes, estudianteSeleccionado];
					return {
						...curso,
						estudiantes: estudiantesActualizados,
					};
				}
				return curso;
			});
			setCursos(cursosActualizados);
			setEstudianteSeleccionado('');
			setCursoSeleccionado((prevCurso) => {
				return {
					...prevCurso,
					estudiantes: [...prevCurso.estudiantes, estudianteSeleccionado],
				};
			});
			editarCurso(cursoSeleccionado.id, {
				...cursoSeleccionado,
				estudiantes: [...cursoSeleccionado.estudiantes, estudianteSeleccionado],
			});
		}
	};

	const handleQuitarEstudiante = (estudiante) => {
		const cursosActualizados = cursos.map((curso) => {
			if (curso.id === cursoSeleccionado.id) {
				const estudiantesActualizados = curso.estudiantes.filter((e) => e.id !== estudiante.id);
				return {
					...curso,
					estudiantes: estudiantesActualizados,
				};
			}
			return curso;
		});
		setCursos(cursosActualizados);
		setCursoSeleccionado((prevCurso) => {
			return {
				...prevCurso,
				estudiantes: prevCurso.estudiantes.filter((e) => e.id !== estudiante.id),
			};
		});
		editarCurso(cursoSeleccionado.id, {
			...cursoSeleccionado,
			estudiantes: cursoSeleccionado.estudiantes.filter((e) => e.id !== estudiante.id),
		});
	};

	const handleGuardarProfesor = (e) => {
		e.preventDefault();
		const cursosActualizados = cursos.map((curso) => {
			if (curso.id === cursoSeleccionado.id) {
				return {
					...curso,
					profesor: profesorSeleccionado,
				};
			}
			return curso;
		});
		setCursos(cursosActualizados);
		editarCurso(cursoSeleccionado.id, {
			...cursoSeleccionado,
			profesor: profesorSeleccionado,
		});
	};

	return (
		<div className="row">
			<div className="col-md-6">
				{hayDatosDisponibles ? (
					<form>
						<div className="form-group">
							<label htmlFor="curso">Curso:</label>
							<select
								id="curso"
								className="form-control"
								onChange={(e) => handleCursoClick(JSON.parse(e.target.value))}
								value={cursoSeleccionado ? JSON.stringify(cursoSeleccionado) : ''}
							>
								<option value="">Seleccione un curso</option>
								{listaCursos.map((curso) => (
									<option key={curso.id} value={JSON.stringify(curso)}>
										{curso.materia}
									</option>
								))}
							</select>
						</div>
						<div>
							<label htmlFor="profesor">Profesor:</label>
							<select
								id="profesor"
								className="form-control"
								value={profesorSeleccionado}
								onChange={handleProfesorChange}
							>
								<option value="">Seleccione un profesor</option>
								{profesoresDisponibles.map((profesor) => (
									<option key={profesor.id} value={profesor.nombre}>
										{profesor.nombre}
									</option>
								))}
							</select>
							<button className="btn btn-primary" onClick={handleGuardarProfesor}>
								Guardar Profesor
							</button>
						</div>
						<div>
							<label htmlFor="estudiante">Estudiante:</label>
							<select
								id="estudiante"
								className="form-control"
								onChange={handleEstudianteChange}
								value={estudianteSeleccionado ? estudianteSeleccionado.id : ''}
							>
								<option value="">Seleccione un estudiante</option>
								{estudiantesDisponibles.map((estudiante) => (
									<option key={estudiante.id} value={estudiante.id}>
										{estudiante.nombre}
									</option>
								))}
							</select>
							<button className="btn btn-primary" onClick={handleAgregarEstudiante}>
								Agregar Estudiante
							</button>
						</div>
						{cursoSeleccionado && (
							<div>
								<h4>Estudiantes:</h4>
								<ul>
									{cursoSeleccionado.estudiantes.map((estudiante) => (
										<li key={estudiante.id}>
											{estudiante.nombre}{' '}
											<button className="btn btn-danger" onClick={() => handleQuitarEstudiante(estudiante)}>
												Quitar
											</button>
										</li>
									))}
								</ul>
							</div>
						)}
					</form>
				) : (
					<div>No hay estudiantes, profesores o cursos disponibles.</div>
				)}
			</div>
		</div>
	);
};
