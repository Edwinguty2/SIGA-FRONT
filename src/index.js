import React from 'react';
import ReactDOM from 'react-dom/client';
import { EstudiantesApp } from './SigaApp';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<EstudiantesApp />
	</React.StrictMode>
)