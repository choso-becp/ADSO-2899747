function porncet(){
    let numeroUno=parseInt(document.getElementById('txtNumeroUno').value);
    let porcent;
    porcent= numeroUno/100;
    resultText = `El porcentaje es: ${porcent}`;
    document.getElementById('porcentaje').innerHTML=`<strong>${resultText}</strong>`;
    return false;
}