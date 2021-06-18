function accion(){
    console.log('esta funcionando mi boton');
    var ancla = document.getElementsByClassName('nav-enlace');
    for(var i = 0; i < ancla.length; i++){
        enlace[i].classList.toggle('accion');
    }



}