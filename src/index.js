import React from 'react';
import ReactDOM from 'react-dom/client';
import { SigaApp } from './SigaApp';
import 'bootstrap/dist/css/bootstrap.css';
import './estilo/style.css';


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<SigaApp />
	</React.StrictMode>
)