import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Crear } from './componentes/paginas/Crear';
import { CursoLibre } from './componentes/paginas/CursoLibre';
import { Navbar } from "./componentes/navegacion/Navbar";
import { Inicio } from "./componentes/paginas/Inicio";

export const SigaApp = () => {
	return (
		<>
			<div className='SigaApp'>
				<Router>
					<Navbar />
					<Switch>
						<Route path='/' exact component={Inicio} />
						<Route path='/crear' component={Crear} />
						<Route path='/curso-libre' component={CursoLibre} />
					</Switch>
				</Router>
			</div>
		</>
	);
}
