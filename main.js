//function tocaSom (idElementoAudio){

 //   document.querySelector(idElementoAudio).play();
//}

//document.querySelector('.tecla_pom').onclick = tocaSomPom;


//const listaDeTeclas = document.querySelectorAll('.tecla');

//listaDeTeclas[0].onclick = tocaSomPom;

//let contator = 0



//enquanto
//while (contator < listaDeTeclas.length) {

 //   const tecla = listaDeTeclas[contator];
 //   const instrumento = tecla.classList[1];
  

    //templete string
  //  const inAudio = `#som_${instrumento}`;
    //console.log(inAudio);

 //   tecla.onclick = function(){
 //       tocaSom(inAudio);
 //   }

 //   contator = contator +1;

 //   //console.log[contator];
//}

//para
//for (let contator = 0; contador < listaDeTeclas.length; contador++) {

//   const tecla = listaDeTeclas[contator];
//    const instrumento = tecla.classList[1];
  

    //templete string
//    const inAudio = `#som_${instrumento}`;
    //console.log(inAudio);

//   tecla.onclick = function(){
 //      tocaSom(inAudio);
//    }

   //contator = contator +1;

 //   console.log[contator];
//}



function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName === 'audio'){
            elemento.play();
    }
    else{
        //alert('Elemento não encontrado');   
        console.log('Elemento não encontrado ou seletor invalido');
    }


    
}

const listaDeTeclas = document.querySelectorAll('.tecla');

// para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    
    // template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){

        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }

        
    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }

}
