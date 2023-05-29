import '../../estilo/inicio.css';

export const Inicio = ({ facultades }) => {
	return (
		<div className="container mt-4">
			<h1 className="mt-4">Facultades</h1>
			{facultades &&
				Object.entries(facultades).map(([facultad, datos]) => (
					<div key={facultad} className="facultad mt-4">
						<h2>{facultad}</h2>
						<div className="row">
							<div className="col-md-6">
								<h3>Asignaturas:</h3>
								<ul className="list-group">
									{datos?.asignaturas?.map((asignatura, index) => (
										<li key={index} className="list-group-item">
											{asignatura}
										</li>
									))}
								</ul>
							</div>
							<div className="col-md-6">
								<h3>Cursos:</h3>
								<table className="table">
									<thead>
										<tr>
											<th>Materia</th>
											<th>Profesor</th>
										</tr>
									</thead>
									<tbody>
										{datos?.cursos?.map((curso) => (
											<tr key={curso.id}>
												<td>{curso.materia}</td>
												<td>{curso.profesor}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
						<div className="row mt-4">
							<div className="col-md-6">
								<h3>Estudiantes:</h3>
								<ul className="list-group">
									{datos?.estudiantes?.map((estudiante) => (
										<li key={estudiante.id} className="list-group-item">
											ID: {estudiante.id} - {estudiante.nombre}
										</li>
									))}
								</ul>
							</div>
							<div className="col-md-6">
								<h3>Profesores:</h3>
								<ul className="list-group">
									{datos?.profesores?.map((profesor) => (
										<li key={profesor.id} className="list-group-item">
											ID: {profesor.id} - {profesor.nombre}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				))}
		</div>
	);
};
