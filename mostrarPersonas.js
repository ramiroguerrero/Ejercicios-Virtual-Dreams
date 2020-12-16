const http = require('request-promise');

const consulta = {
    uri: 'https://reclutamiento-14cf7.firebaseio.com/personas.json',
    json: true
};

http(consulta)
    .then((respuesta)=>{
        console.log(respuesta);
    })
    .catch((err)=>{
        console.error("Sucedio un problema en la consulta");
    });