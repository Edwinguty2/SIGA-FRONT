import { useState } from 'react';

export const CrearCurso = ({ agregarCurso, facultades }) => {
	const [selectedFacultad, setSelectedFacultad] = useState('');
	const [selectedAsignatura, setSelectedAsignatura] = useState('');

	const handleFacultadChange = (e) => {
		setSelectedFacultad(e.target.value);
		setSelectedAsignatura('');
	};

	const handleAsignaturaChange = (e) => {
		setSelectedAsignatura(e.target.value);
	};

	const handleGuardarCurso = () => {
		if (selectedAsignatura) {
			const facultad = selectedFacultad.toLowerCase();
			const asignatura = selectedAsignatura;
			agregarCurso(asignatura, facultad);
		} else {
			console.log('Debe seleccionar una asignatura');
		}
	};

	const asignaturas = selectedFacultad ? facultades[selectedFacultad.toLowerCase()].asignaturas : [];

	return (
		<div>
			<h1>Crear Curso</h1>
			<form>
				<div className="form-group">
					<label>Facultad:</label>
					<select className="form-control" value={selectedFacultad} onChange={handleFacultadChange}>
						<option value="">Seleccione una facultad</option>
						{Object.keys(facultades).map((facultad) => (
							<option key={facultad} value={facultad}>
								{facultad}
							</option>
						))}
					</select>
				</div>
				{selectedFacultad && (
					<div className="form-group">
						<label>Asignatura:</label>
						<select className="form-control" value={selectedAsignatura} onChange={handleAsignaturaChange}>
							<option value="">Seleccione una asignatura</option>
							{asignaturas.map((asignatura, index) => (
								<option key={index} value={asignatura}>
									{asignatura}
								</option>
							))}
						</select>
					</div>
				)}
				<button type="button" className="btn btn-primary" onClick={handleGuardarCurso}>
					Guardar Curso
				</button>
			</form>
		</div>
	);
};
