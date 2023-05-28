import React, { useState } from "react";

export const CursoLibre = () => {
	const [cursos, setCursos] = useState([
		{
			id: 1,
			curso: "Curso Libre 1",
			profesor: "",
			estudiantes: []
		},
		{
			id: 2,
			curso: "Curso Libre 2",
			profesor: "",
			estudiantes: []
		},
		{
			id: 3,
			curso: "Curso Libre 3",
			profesor: "",
			estudiantes: []
		}
	]);
	const [cursoSeleccionado, setCursoSeleccionado] = useState(null);
	const [profesorSeleccionado, setProfesorSeleccionado] = useState("");
	const [estudianteSeleccionado, setEstudianteSeleccionado] = useState("");
	const [estudiantesDisponibles, setEstudiantesDisponibles] = useState([
		"Estudiante 1",
		"Estudiante 2",
		"Estudiante 3",
		"Estudiante 4",
		"Estudiante 5"
	]);

	const handleCursoClick = (curso) => {
		setCursoSeleccionado(curso);
		setProfesorSeleccionado(curso.profesor);
	};

	const handleProfesorChange = (e) => {
		setProfesorSeleccionado(e.target.value);
	};

	const handleEstudianteChange = (e) => {
		setEstudianteSeleccionado(e.target.value);
	};

	const handleAgregarEstudiante = () => {
		if (estudianteSeleccionado) {
			const cursosActualizados = cursos.map((curso) => {
				if (curso.id === cursoSeleccionado.id) {
					return {
						...curso,
						estudiantes: [...curso.estudiantes, estudianteSeleccionado]
					};
				}
				return curso;
			});
			setCursos(cursosActualizados);
			setEstudianteSeleccionado("");
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
				return {
					...curso,
					estudiantes: curso.estudiantes.filter((e) => e !== estudiante)
				};
			}
			return curso;
		});
		setCursos(cursosActualizados);
		setCursoSeleccionado((prevCurso) => {
			return {
				...prevCurso,
				estudiantes: prevCurso.estudiantes.filter((e) => e !== estudiante)
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
						<input type="text" id="curso" className="form-control" value={cursoSeleccionado ? cursoSeleccionado.curso : ""} disabled />
					</div>
					<div className="form-group">
						<label htmlFor="profesor">Profesor:</label>
						<select id="profesor" className="form-select" value={profesorSeleccionado} onChange={handleProfesorChange}>
							<option value="">Seleccionar Profesor</option>
							<option value="Profesor 1">Profesor 1</option>
							<option value="Profesor 2">Profesor 2</option>
							<option value="Profesor 3">Profesor 3</option>
						</select>
						<button type="button" className="btn btn-primary mt-2" onClick={handleGuardarProfesor}>
							Guardar Profesor
						</button>
					</div>
					<div className="form-group">
						<label htmlFor="estudiantes">Estudiantes:</label>
						<select id="estudiantes" className="form-select" value={estudianteSeleccionado} onChange={handleEstudianteChange}>
							<option value="">Seleccionar Estudiante</option>
							{estudiantesDisponibles.map((estudiante) => (
								<option key={estudiante} value={estudiante}>
									{estudiante}
								</option>
							))}
						</select>
						<button type="button" className="btn btn-primary mt-2" onClick={handleAgregarEstudiante}>
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
								<td>{curso.estudiantes.length}</td>
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
									<th>Nombre</th>
									<th>Acciones</th>
								</tr>
							</thead>
							<tbody>
								{cursoSeleccionado.estudiantes.map((estudiante) => (
									<tr key={estudiante}>
										<td>{estudiante}</td>
										<td>
											<button type="button" className="btn btn-danger" onClick={() => handleQuitarEstudiante(estudiante)}>
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
