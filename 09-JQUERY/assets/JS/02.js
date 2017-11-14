/*--------------------------
   LES SELECTEURS Jquery
-------------------------*/

// -- Format :$('selecteur')
// -- En JQuery, tous les sélecteurs CSS sont disponibles ...

$(function(){
    // -- DOM READY !
    // -- LesFlemmards.js
    function l(e) {
        console.log(e);
    }

    // -- Sélectionner les balises SPAN :
       
        //-- Version Javascript :
        l(document.getElementsByTagName('span'));

        // Version jQuery
        l($('span'));

    // -- Sélectionner mon menu
    
        // -- Version Javascript
        l(document.getElementById('menu'));

        // -- Version jQuery
        l($('menu'));

    // -- Sélectionner une classe
    
        // -- Version Javascript
        l(document.getElementsByClassName('MaClasse'));

        // -- Version jQuery
        l($('.MaClasse'));

    // -- Sélectionner un attribut
         
         // En jQuery
         l($("[herf='https://www.google.fr']"));

})