export const getCursos = async () => {
    const url = `http://localhost:8080/cursos`;
    const resp = await fetch(url)
    const data = await resp.json();

    const cursosList = data.map(curso => ({
        materia: curso.materia,
        facultad: curso.facultad,
        id: curso.id,
        profesor: curso.profesor,
        estudiantes: curso.estudiantes
    }));
    return cursosList;
};