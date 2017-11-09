/*------------------------------------
   LA MANIPULATION DES CONTENUS
--------------------------------------*/

function l(e) {
    console.log(e);
}

// -- Je souhaite récuperer mon lien ; comment procéder ?
var google = document.getElementById('google');
l(google)

// -- Maintenant, je souhaite accéder aux informations de ce lien ... par exemple

// -- A : Le lien vers lequel pointe la balise
l("Le lien vers lequel pointe la balise : ");
l(google.href);

//-- B: l'ID de la balise :
l("l'ID de la balise : ");
l(google.id);

// -- C : La Classe de la balise :
l("La Classe de la balise : ");
l(google.className);

// -- D : La texte de balise
l("Le texte de la balise : ");
l(google.textContent)

// -- Maintenant, je souhaite modifier le contenu de mon lien !
//-- Comme une variable classique, je vais simplement venir affecter une nouvelle valeur.
google.textContent = "Mon lien vers Google !";

/*------------------------------------
   AJOUTER UN ELEMENT DANS MA PAGE
--------------------------------------*/

// -- Nous allons utiliser deux methodes :
     
    // -- 1 : LA fonction document.createElement()  va pemrettre de générer un nouvel élément dans le DOM;
    // -- que je pourrais par la suite modifier avec les méthodes que nous venons de voir.

    // -- PS Ce nouvel élément est placé en mémoire.

    // -- Définition de l'élément
    var span = document.createElement('span')

    // -- Si je souhaite lui donner un ID
    span.id = "MonSpan";

    //-- Si je souhaite lui attribuer du contenu ...
    span.textContent = "Mon beau Texte en JS !";

    // -- La fonction appendChild() va permettre de rajouter un enfant à un element du DOM.
    google.appendChild(span)

    /* -------------------------------
            EXERCICE
En partant du travail déjà réalisé sur la page.
Créez directement dans la page une balise <h1></h1> ayant comme contenu : "Titre de mon Article".

Dans cette balise, vous créerez un lien vers une url de votre choix.

BONUS : Ce lien sera de couleur Rouge et non souligné.
-------------------------------- */
/*var h1 = document.createElement('h1')
var body = document.getElementById('body');

var a = document.createElement('a');
h1.id = "Monh1"

h1.textContent = "Titre de mon article" ;


body.appendChild(h1);*/

//CORRECTION

// -- Création de la h1
var h1 = document.createElement('h1')

// -- Création de la balise a
var a = document.createElement('a');

// -- Je vais donner un titre à mon lien
a.textContent = "Titre de mon article";

// -- Je veux donenr un lien à mon lien 
a.href="#";

   // --appenChild()

     //-- Je met mon lien (a) dans mon h1
     h1.appendChild(a);

     //-- Je met mon h1 dans ma page, dans mon body
     document.body.appendChild(h1);

     // -- Correction bonus
      
       //-- Je veux que mon lien soit de couleur rouge
       a.style.color ="red" ;

       // -- Je veux que mon lien ne soit pas souligné
       a.style.textDecoration ="none";