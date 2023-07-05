// Funcion para obtener los datos de la tarea cuando se carga la página
const updateReservaForm = document.querySelector('#updateReservaForm');

document.addEventListener("DOMContentLoaded", async () => {
    console.log("DOM cargado");

    const reservaId = updateReservaForm.dataset.id;

    try {
        const response = await fetch(
            `http://localhost:8000/api/reservas/${reservaId}`
        );

        // Si hubo un error al obtener los datos de la reserva
        if (!response.ok) {
            throw {
                message: "Error al obtener datos de la reserva",
            };
        }

        // Se obtienen los datos de la respuesta (fetch)
        const {
            fullname,
            flightCode,
            date,
            time
        } = await response.json();

        const inputFullname = document.querySelector('#fullname');
        const inputFlightCode = document.querySelector('#flightCode');
        const inputDate = document.querySelector('#date');
        const inputTime = document.querySelector('#time');

        inputFullname.value = fullname;
        inputFlightCode.value = flightCode;
        inputDate.value = date;
        inputTime.value = time;

    } catch (error) {
        console.log(error);
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
        });
    }
});

updateReservaForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const reservaId = updateReservaForm.dataset.id;

    const formData = {
        fullname: e.target.fullname.value,
        flightCode: e.target.flightCode.value,
        date: e.target.date.value,
        time: e.target.time.value,
    }

    try {
        const response = await fetch(`http://localhost:8000/api/reservas/${reservaId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const respToJson = await response.json();

        console.log(respToJson);

        if (response.status !== 200) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: respToJson.message,
            });
            return;
        }

        Swal.fire({
            icon: 'success',
            title: 'Reserva se editó Correctamente',
            text: respToJson.message,
        });

        updateReservaForm.reset();

        setTimeout(() => {
            window.location.href = '/';
        }, 2000);

    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: error.message,
            timer: 2000,
        })
    }
});
