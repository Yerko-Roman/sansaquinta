const getMedida = async ()=>{
    let resultado = await axios.get("api/medida/get");
    return resultado.data;
};