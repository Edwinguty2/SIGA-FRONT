import React from 'react';
import ReactDOM from 'react-dom/client';
import { SigasApp } from './SigaApp';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<SigasApp />
	</React.StrictMode>
)