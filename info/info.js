
const lugar = require ('../lugar/lugar');
const clima = require ('../clima/clima');

const getInfo = async (direccion)=>{

    //Forma 1
    // const rsClima = await lugar.getLugarLatLng(direccion)
    //                     .then(resp=>clima.getClima(resp.lat,resp.lng))
    //                     .catch(error=>{throw new Error(`No se pudo determinar el clima del lugar ${direccion}`)});

    //     return `El clima del lugar ${direccion} es ${rsClima}`;

    //Forma 2
    try{
        const coords= await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat,coords.lng)    
    }catch(e){
        return `No se pudo determinar el clima del lugar ${direccion}`
    }

}


module.exports={
    getInfo
}