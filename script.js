var adultos       = document.getElementById("adultos")
var criancas      = document.getElementById("criancas")
var duracao       = document.getElementById("duracao")
var entradas      = [adultos, criancas, duracao]
var quantCarne    = document.getElementById("carne")
var quantCerveja  = document.getElementById("cerveja")
var quantAgua     = document.getElementById("agua")
var calcularBtn   = document.getElementById("calcular")
var voltar        = document.getElementById("voltar")
var blocks        = document.getElementsByClassName('miniContainer')
for(x of blocks){ x.style.display='none'}
voltar.style.display = 'none';

function calcular(){
    //carne 400g/p se h > 6 =>  650g/p
    //cerveja 1200mL,  se h > 6 => 2000ml
    //agua/rfri 1000ml, se h > 6 => 1500ml
    for(x of entradas) {if(!x.value)  { x.value  = 0 } }
    
    let pessoas = parseInt(adultos.value) + parseInt(criancas.value)/2

    let carne   = pessoas*.4
    let cerveja = pessoas*1200
    let agua    = pessoas

    if(parseInt(duracao.value)> 6) {
        carne   += pessoas*.25
        cerveja += pessoas*.8
        agua    += pessoas*.5
    } 
    for(x of entradas){x.style.display = "none";}
    for(x of blocks){ x.style.display='flex'}
    quantCarne.textContent      = carne.toFixed(2).toString()+'kg';
    quantCerveja.textContent    = (cerveja/1000).toString()+'ml';
    quantAgua.textContent       = agua.toString()+'ml';
    calcularBtn.style.display      = 'none';
    voltar.style.display        = 'block';
} 

const retornar = ()=>{
    for(x of entradas){x.style.display = "block";}
    for(x of blocks){ x.style.display='none'}
    calcularBtn.style.display      = 'block';
    voltar.style.display        = 'none';
}