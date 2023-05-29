import { useState } from 'react';

const Crear = ({ agregarEstudiante, agregarProfesor, agregarAsignatura }) => {
    const [facultad, setFacultad] = useState("");
    const [estudiante, setEstudiante] = useState([]);
    const [profesor, setProfesor] = useState([]);
    const [asignatura, setAsignatura] = useState("");

    const generarID = () => {
        return Math.floor(Math.random() * 1000);
    };

    const guardarEstudiante = (e) => {
        e.preventDefault();
        const id = generarID();
        const nuevoEstudiante = {
            id: id,
            nombre: estudiante,
        };
        agregarEstudiante(nuevoEstudiante, facultad);
        setEstudiante("");
        setFacultad("");
    };

    const guardarProfesor = (e) => {
        e.preventDefault();
        const id = generarID();
        const nuevoProfesor = {
            id: id,
            nombre: profesor
        };
        agregarProfesor(nuevoProfesor, facultad);
        setProfesor("");
        setFacultad("");
    };

    const guardarAsignatura = (e) => {
        e.preventDefault();
        agregarAsignatura(asignatura, facultad);
        setAsignatura("");
        setFacultad("");
    };

    return (
        <div>
            <label htmlFor="facultad">Facultad</label>
            <select
                className="form-select"
                aria-label="Default select example"
                value={facultad}
                onChange={(event) => setFacultad(event.target.value)}
            >
                <option value="">Seleccione Facultad</option>
                <option value="EICA">EICA</option>
                <option value="INGENIERIA">Ingeniería</option>
                <option value="DERECHO">Derecho</option>
                <option value="COMUNICACION">Comunicación</option>
                <option value="SALUD">Salud</option>
                <option value="EDUCACION">Educación</option>
            </select>

            {facultad && (
                <div>
                    <h1>Formulario de Asignaturas</h1>

                    <form onSubmit={guardarEstudiante}>
                        <h2>Agregar Estudiante</h2>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                value={estudiante}
                                onChange={(e) => setEstudiante(e.target.value)}
                                placeholder="Nombre del estudiante"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Agregar Estudiante
                        </button>
                    </form>

                    <form onSubmit={guardarProfesor}>
                        <h2>Agregar Profesor</h2>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                value={profesor}
                                onChange={(e) => setProfesor(e.target.value)}
                                placeholder="Nombre del profesor"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Agregar Profesor
                        </button>
                    </form>

                    <form onSubmit={guardarAsignatura}>
                        <h2>Agregar Asignatura</h2>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                value={asignatura}
                                onChange={(e) => setAsignatura(e.target.value)}
                                placeholder="Nombre de la asignatura"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Agregar Asignatura
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Crear;