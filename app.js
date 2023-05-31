const express = require("express");
const app = express();
let contador = 0;
let contadorIncremento1 = 0;
let contadorIncremento5= 0;

app.get ("/contador",function(req, res){
    res.send({contador});
});

app.get("/incrementar1", function(req, res) {
    contador++;
    contadorIncremento1++;
    res.send({contador});
});

app.get("/incrementar5", function(req, res) {
    contador +=5;
    contadorIncremento5++;
    res.send({contador});
});

app.get("/relatorio", function(req ,res){

    res.send({ contador, incremento1: contadorIncremento1, incremento5: contadorIncremento5 });

});
app.listen(3000, function(){
    console.log("Porta 3000 está aberta e funcionando!");
});