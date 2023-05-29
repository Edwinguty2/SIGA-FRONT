import { useState } from 'react';
import FormularioFacultad from '../creacion/FormularioFacultad';



export const Crear = () => {
    const [asignaturas, setAsignaturas] = useState([]);

    const agregarAsignatura = (asignatura) => {
        setAsignaturas([...asignaturas, asignatura]);
    };

    return (
        <div>

            <center><h2>Formulario de Facultad</h2></center>
            <FormularioFacultad agregarAsignatura={agregarAsignatura} />
        </div>
    );
};