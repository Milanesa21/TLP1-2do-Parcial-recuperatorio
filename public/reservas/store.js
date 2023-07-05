const newReservaForm = document.querySelector('#newReservaForm');

newReservaForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const fullname = document.querySelector('#fullname').value;
  const flightCode = document.querySelector('#flightCode').value;
  const date = document.querySelector('#date').value;
  const time = document.querySelector('#time').value;

  const formData = {
    fullname,
    flightCode,
    date,
    time,
  };

  try {
    const response = await fetch('http://localhost:8000/api/reservas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const respToJson = await response.json();

    console.log(respToJson);
    
    if(response.status !== 201 && response.status !== 200) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: respToJson.message,
      });
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'Reserva creada correctamente',
      text: respToJson.message,
    });

    newReservaForm.reset();

    setTimeout(() => {
      window.location.href = '/';
    }, 2000);
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.message,
      timer: 2000,
    });
  }
});
