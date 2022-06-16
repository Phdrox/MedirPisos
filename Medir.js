



var texto= document.querySelector('#resultado');

function clicando(){
var localComprimento=document.querySelector(' #localComprimento').value;
var pisoComprimento=document.querySelector('#pisoComprimento').value; 
var localLargura=document.querySelector(' #localLargura').value;
var pisoLargura=document.querySelector('#pisoLargura').value;
var b=((localComprimento*localLargura)/(pisoComprimento*pisoLargura))*100;
 
    texto.innerHTML=b.toFixed(2);



}