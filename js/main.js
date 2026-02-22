const form = document.getElementById('vehicleForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const anio = document.getElementById('anio').value;

    const vehiculo = {
        marca : marca,
        mdoelo : modelo,
        anio: parseInt(anio)
    };

    debugger;
    
    console.log(vehiculo);
    
});