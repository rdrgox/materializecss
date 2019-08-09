$(document).ready(function() {
    //menu desplegable de version mobil
    $('.sidenav').sidenav();
    //inicio slider de imagenes
    $('.slider').slider();
    //me desplegble
    $(".dropdown-trigger").dropdown({
        hover: true, //se activa haciendo click
        coverTrigger: false // las opciones aparcen debajo del menu dropdown
    });
    //menu desplegable de sidenav
    $('.collapsible').collapsible({
        accordion: true
    });
    //inicio efecto parallax
    $('.parallax').parallax();
    //contador de caracteres
    $('textarea#cont_mensaje').characterCounter();
    //controlador de modal
    $('.modal1').modal();
    //carga de select en los formularios
    $('select').formSelect();
});