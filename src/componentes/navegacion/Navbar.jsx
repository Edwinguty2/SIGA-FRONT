export const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-dark bg-dark">
				<div className="container">
					<span className="navbar-brand">Gestión Asignaturas</span>
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link" href="/">Inicio</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/">Crear</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/">Curso Libre</a>
						</li>
					</ul>
				</div>
			</nav>
			);
		</>
	)
}

