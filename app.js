
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const info = require('./info/info');

const argv = require ('yargs').options({
          direccion:{
              alias:'d',
              desc:'Direccion de la ciudad para obtener el clima',
              demand:true
          }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
// .then(resp=>console.log(resp));


// clima.getClima(35,139)
// .then(console.log)
// .catch(console.log);

//daf3d7b937755c746ad6ca97fc375473

info.getInfo(argv.direccion)
    .then(console.log);

