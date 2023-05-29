export const getCursosLibres = async (asignatura, facultadAsignada, id) => {
    const url = `http://localhost:8080/curso/libre/crear/?asignatura=${asignatura}&facultadAsignada=${facultadAsignada}&id=${id}`;
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