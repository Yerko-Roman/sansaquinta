const getMedidor = async ()=>{
    let resultado = await axios.get("api/medidor/get");
    return resultado.data;
};