/*------------------------------------
            LE DOMES
          
 Le DOM est une interface de développment en JS
 pour HTML. Grâce au DOM, je vais être en mesure
 d'accéder / modifier mon HTML.
 
 L'Objet "document" : c'est le point d'entrée
 vers mon contenu HTML !

 chaque page chargée dans mon naviguateur à un 
 objet "document"
--------------------------------------*/

//-- Comment puis-je faire pour récupérer les différente informations de ma page HTML

/*------------------------------------
        document.getElementById
        ----------------------
document.getElementById() : C'est une fonction
qui va permettre de récupérer un élément HTML
à partir de son identifiant unique : ID        
--------------------------------------*/

var bonjour = document.getElementById("bonjour");
console.log(bonjour);


/*------------------------------------
        document.getElementByClassName
        ----------------------
document.getElementByClassName() : C'est une 
fonction qui va pemrettre de récupérer un ou plusieurs
éléments (une liste) HTML à partir de leur class.     
--------------------------------------*/

var contenu = document.getElementsByClassName('contenu');
console.log(contenu);

// -- Me renvoi : un tableau JS avec mes éléments HTML, ou encore autrement dit, une "collection" d'élément HTML.

/*------------------------------------
        document.getElementByTagName
        ----------------------
document.getElementByTagName() : C'est une 
fonction qui va pemrettre de récupérer un ou plusieurs
éléments (une liste) HTML à partir de leur * nom de balise *.     
--------------------------------------*/
