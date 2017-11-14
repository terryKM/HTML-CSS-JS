/*-------------------------------------
   LES SELECTEURS D'ENFANTS EN JQUERY
--------------------------------------*/

// -- Initialisation de jQuery
$(function(){

    // -- Les flemmards
    function l(e) {
        console.log(e);
    }

    // Je souhaite sélectionner toutes mes div
    l($('div'))

    // -- Je souhaite selectionner mon header
    l($('nav'))

    // -- Je souhaite selectionner tous les éléments descendants direct (enfants) qui sont dans le menu.
    l($('nav').children())

    // -- Je souhaite parmi ces enfants, uniquement les élément "ul"
    l($('nav').children('ul'))
    
    // -- Je souhaite récupérer tout les élément "li" de mon "ul"
    l($('nav').children('ul').find('li'))

    // -- Je souhaite récupérer uniquement le deuxième élément de mon "li"
    l($('nav').children('ul').find('li').eq(1))

    // -- Je souhaite connaitre le voisin immediat de mon menu 
    l($('nav').next())
    l($('nav').next().next()) // le voisin du voisin
    l($('nav').prev()) // -- Le voisin d'avant

    // -- LES PARENTS
    l($('nav').parent())
})