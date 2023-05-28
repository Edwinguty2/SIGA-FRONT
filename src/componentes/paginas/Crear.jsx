import React, { useState } from 'react';
import FormularioAsignaturas from '../creacion/FormularioAsignaturas';


export const Crear = () => {
  const [asignaturas, setAsignaturas] = useState([]);

  const agregarAsignatura = (asignatura) => {
    setAsignaturas([...asignaturas, asignatura]);
  };

  return (
    <div>
      <h1>Formulario de Asignaturas</h1>
      <FormularioAsignaturas agregarAsignatura={agregarAsignatura} />
    
    </div>
  );
};