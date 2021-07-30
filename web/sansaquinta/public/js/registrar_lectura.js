const cargarMedidor = async()=>{
    let medidor = await getMedidor();
    let medidorSelect = document.querySelector("#medidor-select");
    medidor.forEach(m=>{
        let option = document.createElement("option");
        option.innerText = m;
        medidorSelect.appendChild(option);
    });
};

const cargarMedida = async()=>{
    let medida = await getMedidor();
    let medidaSelect = document.querySelector("#medida-select");
    medida.forEach(m=>{
        let option = document.createElement("option");
        option.innerText = m;
        medidaSelect.appendChild(option);
    });
};

document.addEventListener("DOMContentLoaded", ()=>{
    cargarMedidor();
});

document.addEventListener("DOMContentLoaded", ()=>{
    cargarMedida();
});

document.querySelector("registrar-btn").addEventListener("click", async()=>{
    let fecha = document.querySelector("#fecha-txt").value.trim();
    let hora  = document.querySelector("#hora-txt").value.trim();
    let medidor = document.querySelector("#medidor-select").value.trim();
    let direccion = document.querySelector("#descripcion-txt").value.trim();
    let valor = document.querySelector("#valor-txt").value.trim();
    let medida = document.querySelector("#tipo-select").value.trim();

    let lectura = {};
    lectura.fecha = fecha;
    lectura.hora = hora;
    lectura.medidor = medidor;
    lectura.direccion = direccion;
    lectura.valor = valor;
    lectura.medida = medida;

    await crearLectura(lectura);
    await Swal.fire("Lectura creada", "Lectura creada exitosamente", "info");
    window.location.href = "mediciones_existentes";
});