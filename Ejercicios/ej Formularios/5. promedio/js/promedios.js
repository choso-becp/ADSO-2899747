function promedios(){
    let numeroUno=parseInt(document.getElementById('txtNumeroUno').value);
    let numeroDos=parseInt(document.getElementById('txtNumeroDos').value);
    let numeroTres=parseInt(document.getElementById('txtNumeroTres').value);
    let promedio;
    promedio= (numeroUno+numeroDos+numeroTres)/3;
    resultText = `El promedio de los tres números es: ${promedio}`;
    document.getElementById('prom').innerHTML=`<strong>${resultText}</strong>`;
    return false;
}