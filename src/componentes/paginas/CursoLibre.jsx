import React, { useState } from "react";

export const CursoLibre = ({ listaCursos, extraeEstudiantes, extraeProfesores }) => {
	const [cursoSeleccionado, setCursoSeleccionado] = useState(null);
	const [profesorSeleccionado, setProfesorSeleccionado] = useState(null);
	const [estudianteSeleccionado, setEstudianteSeleccionado] = useState(null);
	const [cursos, setCursos] = useState(listaCursos || []);
	const [estudiantesDisponibles, setEstudiantesDisponibles] = useState(extraeEstudiantes || []);
	const [profesoresDisponibles, setProfesoresDisponibles] = useState(extraeProfesores || []);

	const handleCursoClick = (curso) => {
		setCursoSeleccionado(curso);
		setProfesorSeleccionado(curso.profesor);
	};

	const handleProfesorChange = (e) => {
		setProfesorSeleccionado(e.target.value);
	};

	const handleEstudianteChange = (e) => {
		const estudianteId = parseInt(e.target.value);
		const estudiante = estudiantesDisponibles.find((est) => est.id === estudianteId);
		setEstudianteSeleccionado(estudiante);
	};

	const handleAgregarEstudiante = () => {
		if (
			estudianteSeleccionado &&
			cursoSeleccionado &&
			!cursoSeleccionado.estudiantes.includes(estudianteSeleccionado)
		) {
			const cursosActualizados = cursos.map((curso) => {
				if (curso.id === cursoSeleccionado.id) {
					const estudiantesActualizados = [...curso.estudiantes, estudianteSeleccionado];
					return {
						...curso,
						estudiantes: estudiantesActualizados
					};
				}
				return curso;
			});
			setCursos(cursosActualizados);
			setEstudianteSeleccionado(null);
			setCursoSeleccionado((prevCurso) => {
				return {
					...prevCurso,
					estudiantes: [...prevCurso.estudiantes, estudianteSeleccionado]
				};
			});
		}
	};

	const handleQuitarEstudiante = (estudiante) => {
		const cursosActualizados = cursos.map((curso) => {
			if (curso.id === cursoSeleccionado.id) {
				const estudiantesActualizados = curso.estudiantes.filter((e) => e.id !== estudiante.id);
				return {
					...curso,
					estudiantes: estudiantesActualizados
				};
			}
			return curso;
		});
		setCursos(cursosActualizados);
		setCursoSeleccionado((prevCurso) => {
			return {
				...prevCurso,
				estudiantes: prevCurso.estudiantes.filter((e) => e.id !== estudiante.id)
			};
		});
	};

	const handleGuardarProfesor = () => {
		const cursosActualizados = cursos.map((curso) => {
			if (curso.id === cursoSeleccionado.id) {
				return {
					...curso,
					profesor: profesorSeleccionado
				};
			}
			return curso;
		});
		setCursos(cursosActualizados);
	};

	return (
		<div className="row">
			<div className="col-md-6">
				<form>
					<div className="form-group">
						<label htmlFor="curso">Curso:</label>
						<input
							type="text"
							id="curso"
							className="form-control"
							value={cursoSeleccionado ? cursoSeleccionado.curso : ""}
							disabled
						/>
					</div>
					<div className="form-group">
						<label htmlFor="profesor">Profesor:</label>
						<select
							id="profesor"
							className="form-select"
							value={profesorSeleccionado}
							onChange={handleProfesorChange}
							disabled={!cursoSeleccionado}
						>
							<option value="">Seleccionar Profesor</option>
							{profesoresDisponibles.map((profesor) => (
								<option key={profesor.id} value={profesor.nombre}>
									{profesor.nombre}
								</option>
							))}
						</select>
						<button
							type="button"
							className="btn btn-primary mt-2"
							onClick={handleGuardarProfesor}
							disabled={!cursoSeleccionado}
						>
							Guardar Profesor
						</button>
					</div>
					<div className="form-group">
						<label htmlFor="estudiantes">Estudiantes:</label>
						<select
							id="estudiantes"
							className="form-select"
							value={estudianteSeleccionado ? estudianteSeleccionado.id : ""}
							onChange={handleEstudianteChange}
							disabled={!cursoSeleccionado}
						>
							<option value="">Seleccionar Estudiante</option>
							{estudiantesDisponibles.map((estudiante) => (
								<option key={estudiante.id} value={estudiante.id}>
									{estudiante.nombre}
								</option>
							))}
						</select>
						<button
							type="button"
							className="btn btn-primary mt-2"
							onClick={handleAgregarEstudiante}
							disabled={!cursoSeleccionado || !estudianteSeleccionado}
						>
							Añadir Estudiante
						</button>
					</div>
				</form>
			</div>
			<div className="col-md-6">
				<table className="table">
					<thead>
						<tr>
							<th>ID</th>
							<th>Curso</th>
							<th>Profesor</th>
							<th>Estudiantes</th>
						</tr>
					</thead>
					<tbody>
						{cursos.map((curso) => (
							<tr key={curso.id} onClick={() => handleCursoClick(curso)}>
								<td>{curso.id}</td>
								<td>{curso.curso}</td>
								<td>{curso.profesor ? curso.profesor : "Sin profesor"}</td>
								<td>{curso.estudiantes ? curso.estudiantes.length : 0}</td>
							</tr>
						))}
					</tbody>
				</table>
				{cursoSeleccionado && (
					<div>
						<h3>Estudiantes del Curso</h3>
						<table className="table">
							<thead>
								<tr>
									<th>ID</th>
									<th>Nombre</th>
									<th>Acciones</th>
								</tr>
							</thead>
							<tbody>
								{cursoSeleccionado.estudiantes &&
									cursoSeleccionado.estudiantes.map((estudiante) => (
										<tr key={estudiante.id}>
											<td>{estudiante.id}</td>
											<td>{estudiante.nombre}</td>
											<td>
												<button
													type="button"
													className="btn btn-danger"
													onClick={() => handleQuitarEstudiante(estudiante)}
													disabled={!cursoSeleccionado}
												>
													Quitar
												</button>
											</td>
										</tr>
									))}
							</tbody>
						</table>
					</div>
				)}
			</div>
		</div>
	);
};
