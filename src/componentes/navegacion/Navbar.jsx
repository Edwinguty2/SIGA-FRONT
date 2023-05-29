import { Link } from 'react-router-dom';

export const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-dark bg-dark">
				<div className="container">
					<span className="navbar-brand">Gestión Asignaturas</span>
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link" to="/">Inicio</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/crear">Crear</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/crear-curso-libre">Crear Curso Libre</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/cursos-libres">Cursos Libres</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}
