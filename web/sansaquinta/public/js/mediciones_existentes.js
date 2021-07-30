const cargarMedida = async()=>{
    let filtroCBX = document.querySelector("#filtro-cbx");
    let medida = await getMedida();
    medida.forEach(m=>{
        let option = document.createElement("option");
        option.innerText = m;
        option.value = m;
        filtroCBX.appendChild(option);
    });
};

const iniciarEliminacion = async function(){
    let id = this.idLectura;
    let resp = await Swal.fire({title:"Esta seguto?", text:"Esta operacion es irreversible"
    , icon:"error", showCancelButton:true});
    if(resp.isConfirmed){

        //1. Eliminar
        if(await eliminarLectura(id)){
            //2. Si la eliminacion fue exitosa, recargar la tabla
            let lectura = await getLectura();
            cargarTabla(lectura);
            Swal.fire("Lectura Eliminada", "Lectura eliminada exitosamente", "info");
        }else {
        
            //3. Si no fue exitosa, mostrar un mensaje de error
            Swal.fire("Error", "No se pudo atender la solicitud", "error");
        }
    } else {
        Swal.fire("Cancelado", "Cancelado a peticion del usuario", "info");
    }
};

const cargarTabla = (lecturas)=>{
    let tbody = document.querySelector("#tbody-lectura");
    tbody.innerHTML = "";

    for(let i=0; i<lectura.length; ++i){
        let tr = document.createElement("tr");

        let tdfecha = document.createElement("td");
        tdfecha.innerText = lectura[i].fecha;
        let tdhora = document.createElement("td");
        tdhora.innerText = lecturas[i].hora;
        let tdmedidor = document.createElement("td");
        tdmedidor.innerText = lecturas[i].medidor;
        let tdvalor = document.createElement("td");
        tdvalor.innerText = lecturas[i].valor;
        let tdaccion = document.createElement("td");
        let botoneliminar = document.createElement("button");
        botoneliminar.innerText = "Descartar Lectura";
        botoneliminar.classList.add("btn","btn-danger");
        botoneliminar.idLectura = lecturas[i].id;
        botoneliminar.addEventListener("click", iniciarEliminacion);
        tdaccion.appendChild(botoneliminar);

        tr.appendChild(tdfecha);
        tr.appendChild(tdhora);
        tr.appendChild(tdmedidor);
        tr.appendChild(tdvalor);
        tr.appendChild(tdaccion);

        tbody.appendChild(tr);
    }
};

document.querySelector("#filtro-cbx").addEventListener("change", async ()=>{
    let filtro = document.querySelector("#filtro-cbx").value;
    let lecturas = await getLectura(filtro);
    cargarTabla(lecturas);
});

document.addEventListener("DOMContentLoaded", async ()=>{
    await cargarMedia();
    let lectura = await getLectura();
    cargarTabla(lectura);
});