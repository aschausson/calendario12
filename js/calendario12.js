
mes = -1;

document.getElementById("botonCalendario").onclick = 
function muestraCalendario() {

    anio =  parseInt(document.getElementById("anio").value);
    if (isNaN(anio)){
        document.getElementById("avisoAnio").innerHTML = "Año incorrectamente introducido";
    }
    else{
        rellenaCalendario(anio);
    }
    
};


function diasDelMes(){
    return new Date(anio, mes, 0).getDate();
}

function diasDelMesAnterior(){
    return new Date(anio, mes-1, 0).getDate();
}


function diaDeSemana(){
    dia = new Date(anio, mes-1, 1).getDay();
    if (dia == 0)
        dia = 7;
    return dia;
}

function rellenaCalendario(anio){

    meses = [];
    meses = document.getElementsByClassName("mes");
    for (let j = 1; j <= meses.length; j++) {
        mes = j;
        var diaInicio = 0;
        if (diaDeSemana() != 1){
            diaInicio = diasDelMesAnterior() - diaDeSemana() + 2;
        }
        else{
            diaInicio = diasDelMesAnterior() - 8 + 2;
        }
        var cuentaDias = 8;
        var dias = meses[j-1].getElementsByTagName("div");
        for (var i = diaInicio; i <= diasDelMesAnterior(); i++) {
            dias[cuentaDias].innerHTML =  i ;
            dias[cuentaDias].className = "extra";
            cuentaDias++;
        }
    
        for (var i = 1; i <= diasDelMes(); i++) {
            dias[cuentaDias].innerHTML = i;
            cuentaDias++;
        }
    
        cont = 1;
        for (var i = cuentaDias; i < dias.length; i++) {
            dias[cuentaDias].innerHTML =  cont ;
            dias[cuentaDias].className = "extra";
            cuentaDias++;
            cont++;
        }  
    }


}