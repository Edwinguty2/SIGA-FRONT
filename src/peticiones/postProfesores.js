export const postProfesor = async (profesorNombre, id, facultadAsignada) => {
    const url = `http://localhost:8080/profesor/crear/?profesorNombre=${profesorNombre}&id=${id}&facultadAsignada=${facultadAsignada}`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response;
    } catch (error) {
        console.error(error);
    }
};