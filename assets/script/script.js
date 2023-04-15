let display = document.querySelector("input");//Visor
let btnMenos = document.getElementById("menos");//Botão subtrair
let btnMais = document.getElementById("mais");//Botão Somar
let foto = document.querySelector("img");//Imagem
btnMenos.addEventListener("click", subtrair);
btnMais.addEventListener("click", somar);
let contagem = 0;//Contador
//  FUNÇÃO SOMA
function somar(){
    contagem++;
    display.value=contagem;
    //SE MAIOR QUE 0 E MENOR QUE 10, ADICIONA DIGITO 0 NA FRENTE
    if(display.value<10&&display.value>0){
        display.value='0'+contagem;
    }
    //SE O VALOR FOR MENOR QUE 0 A IMAGEM NÃO APAREÇE
    if(display.value<=(-1)){
        foto.style.display="none";
        foto.src="";
    }
    //SE MAIOR QUE ZERO E MENOR QUE 5, EXIBA A IMAGEM
    if(display.value>0||display.value<6){
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
    if(display.value==5){
        foto.src="assets/img/dog5.png";
    } 
}
//  FUNÇÃO SUBTRAIR
function subtrair(){
    contagem--;
    display.value=contagem;
    //SE MAIOR QUE 0 E MENOR QUE 10, ADICIONA DIGITO 0 NA FRENTE
    if(display.value<10&&display.value>0){
        display.value='0'+contagem;
    }
    //SE O VALOR FOR MENOR QUE 0 A IMAGEM NÃO APAREÇE
    if(display.value<=(-1)){
        foto.style.display="none";
        foto.src="";
    }
    //SE MAIOR QUE ZERO E MENOR QUE 5, EXIBA A IMAGEM
    if(display.value>0||display.value<6){
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
    if(display.value==5){
        foto.src="assets/img/dog5.png";
    } 
}

function tela(){
    let altura = window.innerHeight;
    if(altura==667){
        let conteudo = document.getElementById("container");
        conteudo.style.marginTop="150px";
    }
    else if(altura>=700){
        let conteudo = document.getElementById("container");
        conteudo.style.marginTop="-50px";
    }
}

