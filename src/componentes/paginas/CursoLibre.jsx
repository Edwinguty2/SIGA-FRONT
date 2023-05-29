import React, { useState } from 'react';

export const CursoLibre = ({ listaCursos, extraeEstudiantes, extraeProfesores, editarCurso }) => {
	const [cursoSeleccionado, setCursoSeleccionado] = useState(null);
	const [profesorSeleccionado, setProfesorSeleccionado] = useState('');
	const [estudiantesSeleccionados, setEstudiantesSeleccionados] = useState([]);

	const handleCursoChange = (e) => {
		const id = parseInt(e.target.value);
		const curso = listaCursos.find((curso) => curso.id === id);
		setCursoSeleccionado(curso);
		setProfesorSeleccionado(curso.profesor);
		setEstudiantesSeleccionados(curso.estudiantes);
	};

	const handleProfesorChange = (e) => {
		setProfesorSeleccionado(e.target.value);
	};

	const handleEstudianteChange = (e) => {
		const id = parseInt(e.target.value);
		const estudiante = extraeEstudiantes().find((estudiante) => estudiante.id === id);
		const estudiantes = [...estudiantesSeleccionados];
		if (e.target.checked) {
			estudiantes.push(estudiante);
		} else {
			const index = estudiantes.findIndex((est) => est.id === id);
			estudiantes.splice(index, 1);
		}
		setEstudiantesSeleccionados(estudiantes);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (cursoSeleccionado) {
			const { id } = cursoSeleccionado;
			editarCurso(estudiantesSeleccionados, profesorSeleccionado, id);
		}
	};

	return (
		<div className='CursoLibre'>
			<h1>Cursos Libres</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='curso'>Curso:</label>
					<select name='curso' id='curso' onChange={handleCursoChange}>
						<option value=''>Selecciona un curso</option>
						{listaCursos.map((curso) => (
							<option key={curso.id} value={curso.id}>
								{curso.materia} - {curso.facultad}
							</option>
						))}
					</select>
				</div>
				{cursoSeleccionado && (
					<>
						<div>
							<label htmlFor='profesor'>Profesor:</label>
							<input type='text' name='profesor' value={profesorSeleccionado} onChange={handleProfesorChange} />
						</div>
						{extraeEstudiantes().length > 0 ? (
							<div>
								<label>Estudiantes:</label>
								{extraeEstudiantes().map((estudiante) => (
									<div key={estudiante.id}>
										<input
											type='checkbox'
											id={`estudiante-${estudiante.id}`}
											value={estudiante.id}
											checked={estudiantesSeleccionados.some((est) => est.id === estudiante.id)}
											onChange={handleEstudianteChange}
										/>
										<label htmlFor={`estudiante-${estudiante.id}`}>{estudiante.nombre}</label>
									</div>
								))}
							</div>
						) : (
							<p>No hay estudiantes disponibles</p>
						)}
						<button type='submit'>Guardar</button>
					</>
				)}
			</form>
		</div>
	);
};
