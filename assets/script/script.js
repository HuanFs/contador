let display = document.querySelector("input");
let btnMenos = document.getElementById("menos");
let btnMais = document.getElementById("mais");
let foto = document.querySelector("img");
btnMenos.addEventListener("click", subtrair);
btnMais.addEventListener("click", somar);
let contagem = 0;
function somar(){
    contagem++;
    display.value=contagem;
    if(display.value<10&&display.value>0){
        display.value='0'+contagem;
    }
    if(display.value>0||display.value<5){
        foto.style.display="block";
    }  
    if(display.value==0){
        foto.style.display="none"
    } 
    if(display.value==1){
        foto.src="assets/img/dog1.png";
    } 
    if(display.value==2){
        foto.src="assets/img/dog2.png";
    } 
    if(display.value==3){
        foto.src="assets/img/dog3.png";
    } 
    if(display.value==4){
        foto.src="assets/img/dog4.png";
    } 
}

function subtrair(){
    contagem--;
    display.value=contagem;
    if(display.value<10&&display.value>0){
        display.value='0'+contagem;
    }
    if(display.value>0||display.value<5){
        foto.style.display="block";
    } 
    if(display.value==0){
        foto.style.display="none"
    } 
    if(display.value==1){
        foto.src="assets/img/dog1.png";
    } 
    if(display.value==2){
        foto.src="assets/img/dog2.png";
    } 
    if(display.value==3){
        foto.src="assets/img/dog3.png";
    } 
    if(display.value==4){
        foto.src="assets/img/dog4.png";
    } 
}

