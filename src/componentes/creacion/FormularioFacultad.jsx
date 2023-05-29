import React, { useState } from 'react';

const FormularioFacultad = () => {
    const [facultad, setFacultad] = useState('');
    const [estudiante, setEstudiante] = useState('');
    const [profesor, setProfesor] = useState('');
    const [asignatura, setAsignatura] = useState('');
    const [facultades, setFacultades] = useState({
        ingenieria: {
            estudiantes: [],
            profesores: [],
            asignaturas: []
        },
        medicina: {
            estudiantes: [],
            profesores: [],
            asignaturas: []
        },
        comunicacion: {
            estudiantes: [],
            profesores: [],
            asignaturas: []
        },
        educacion: {
            estudiantes: [],
            profesores: [],
            asignaturas: []
        },
        derecho: {
            estudiantes: [],
            profesores: [],
            asignaturas: []
        }
    });


    const handleChangeFacultad = (event) => {
        setFacultad(event.target.value);
    };

    const handleSubmitEstudiante = (event) => {
        event.preventDefault();

        if (facultad && estudiante) {
            setFacultades((prevFacultades) => ({
                ...prevFacultades,
                [facultad]: {
                    ...prevFacultades[facultad],
                    estudiantes: [...(prevFacultades[facultad]?.estudiantes || []), estudiante]
                }
            }));

            setEstudiante('');
        } else {
            alert('Debe seleccionar una facultad y agregar un estudiante');
        }
    };

    const handleSubmitProfesor = (event) => {
        event.preventDefault();

        if (facultad && profesor) {
            setFacultades((prevFacultades) => ({
                ...prevFacultades,
                [facultad]: {
                    ...prevFacultades[facultad],
                    profesores: [...(prevFacultades[facultad]?.profesores || []), profesor]
                }
            }));

            setProfesor('');
        } else {
            alert('Debe seleccionar una facultad y agregar un profesor');
        }
    };

    const handleSubmitAsignatura = (event) => {
        event.preventDefault();

        if (facultad && asignatura) {
            setFacultades((prevFacultades) => ({
                ...prevFacultades,
                [facultad]: {
                    ...prevFacultades[facultad],
                    asignaturas: [...(prevFacultades[facultad]?.asignaturas || []), asignatura]
                }
            }));

            setAsignatura('');
        } else {
            alert('Debe seleccionar una facultad y agregar una asignatura');
        }
    };
    return (
        <div className="container">
            <form onSubmit={handleSubmitEstudiante}>
                <div className="form-group">
                    <label htmlFor="facultad">Facultad</label>
                    <select
                        className="form-control"
                        id="facultad"
                        value={facultad}
                        onChange={handleChangeFacultad}
                    >
                        <option value="">Seleccione una facultad</option>
                        <option value="ingenieria">Ingeniería</option>
                        <option value="medicina">Medicina</option>
                        <option value="comunicacion">Comunicación</option>
                        <option value="educacion">Educación</option>
                        <option value="derecho">Derecho</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="estudiante">Estudiante</label>
                    <input type="text" className="form-control" id="estudiante" value={estudiante} onChange={(event) => setEstudiante(event.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary">Agregar Estudiante</button>
            </form>

            <form onSubmit={handleSubmitProfesor}>
                <div className="form-group">
                    <label htmlFor="profesor">Profesor</label>
                    <input
                        type="text"
                        className="form-control"
                        id="profesor"
                        value={profesor}
                        onChange={(event) => setProfesor(event.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Agregar Profesor
                </button>
            </form>

            <form onSubmit={handleSubmitAsignatura}>
                <div className="form-group">
                    <label htmlFor="asignatura">Asignatura</label>
                    <input
                        type="text"
                        className="form-control"
                        id="asignatura"
                        value={asignatura}
                        onChange={(event) => setAsignatura(event.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Agregar Asignatura
                </button>
            </form>

            <div className='container'>

                <h3>Facultades</h3>
                <div className="mt-5 d-flex">
                    {Object.keys(facultades).map((facultad) => (
                        <div key={facultad} style={{ marginRight: '45px' }}>
                            <h5>{facultad}</h5>
                            <div>
                                <strong>Estudiantes:</strong>
                                {facultades[facultad].estudiantes && facultades[facultad].estudiantes.length > 0 ? (
                                    <ul>
                                        {facultades[facultad].estudiantes.map((estudiante, index) => (
                                            <li key={index}>{estudiante}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>No hay estudiantes </p>
                                )}
                            </div>
                            <div >
                                <strong>Profesores:</strong>
                                {facultades[facultad].profesores && facultades[facultad].profesores.length > 0 ? (
                                    <ul>
                                        {facultades[facultad].profesores.map((profesor, index) => (
                                            <li key={index}>{profesor}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>No hay profesores </p>
                                )}
                            </div>
                            <div>
                                <strong>Asignaturas:</strong>
                                {facultades[facultad].asignaturas && facultades[facultad].asignaturas.length > 0 ? (
                                    <ul>
                                        {facultades[facultad].asignaturas.map((asignatura, index) => (
                                            <li key={index}>{asignatura}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>No hay asignaturas</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FormularioFacultad;
