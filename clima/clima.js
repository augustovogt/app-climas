const axios = require('axios');

const getClima = async (lat,lgn)=>{

    const consulta=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lgn}&appid=daf3d7b937755c746ad6ca97fc375473&units=metric`;

    const resp= await axios.get(consulta);
                           

    return resp.data.main.temp;
}

module.exports={
    getClima
}