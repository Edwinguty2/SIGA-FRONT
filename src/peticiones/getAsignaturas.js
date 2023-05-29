export const getAsignaturas = async (asignatura, facultadAsignada) => {
    const url = `http://localhost:8080/asignatura/crear/?asignatura=${asignatura}&facultadAsignada=${facultadAsignada}`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response;
    } catch (error) {
        console.error(error);
    }
};