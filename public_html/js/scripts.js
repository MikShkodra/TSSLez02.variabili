/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var num1;
var num2;
var risultato;
var totale = 0;

function isEmpty(testo) {
    if (testo.length > 0)
        return false
    else
        return true
}

function checkDati() {
    /*  verifico num1 & num2
     e ritorno true se presenti solo numeri
     altrimenti ritorno false                */
    if (isNaN(num1) || isNaN(num2) || isEmpty(num1) || isEmpty(num2)) {
        return false
    } else {
        return true
    }
}

function faseInput() {
    num1 = document.getElementById("in_num1").value;
    num2 = document.getElementById("in_num2").value;
    okDati = checkDati();
    //verifico okDati e poi vedo se trasformare in numeri
    if (okDati == true) {
        //ATTENZIONE è ancora testo
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
    } else {
        alert("attenzione dati errati")
    }
}

function faseOutput() {
    document.getElementById("div_ris").innerHTML = risultato;
    document.getElementById("totale").innerHTML = totale;
}

function somma() {
    faseInput();        //richiamo il Method faseInput
    if (okDati) {
        risultato = num1 + num2;
        totale = totale + risultato;
        faseOutput();   //richiamo il Method faseOutput  
    }
}

function sottrazione() {
    faseInput();        //richiamo il Method faseInput
    if (okDati) {
        risultato = num1 - num2;
        totale = totale + risultato;
        faseOutput();   //richiamo il Method faseOutput  
    }
}

function moltiplicazione() {
    faseInput();        //richiamo il Method faseInput
    if (okDati) {
        risultato = num1 * num2;
        totale = totale + risultato;
        faseOutput();   //richiamo il Method faseOutput  
    }
}

function divisione() {
    faseInput();        //richiamo il Method faseInput
    if (okDati) {
        risultato = num1 / num2;
        totale = totale + risultato;
        faseOutput();   //richiamo il Method faseOutput  
    }
}
