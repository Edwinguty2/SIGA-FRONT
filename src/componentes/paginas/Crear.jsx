import React, { useState } from 'react';
import FormularioFacultad from '../creacion/FormularioAsignatura';



export const Crear = () => {
  const [asignaturas, setAsignaturas] = useState([]);

  const agregarAsignatura = (asignatura) => {
    setAsignaturas([...asignaturas, asignatura]);
  };

  return (
    <div>
      <h1>Formulario de Asignaturas</h1>
      <FormularioFacultad agregarAsignatura={agregarAsignatura} />
    
    </div>
  );
};