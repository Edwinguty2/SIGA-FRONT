export const postEstudiantes = async (estudianteNombre, id, facultadAsignada) => {
    const url = `http://localhost:8080/estudiante/crear/?estudianteNombre=${estudianteNombre}&id=${id}&facultadAsignada=${facultadAsignada}`;
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