/*---------------------------------------------------------------------------
           LES EVENEMENTS

Les évènements vont me permettr ede déclencher uen fonction c'est à dire :
une série d'instruction suite à un eaction de l'utilisateur .

OBJECTIF : Etre en mesure de capturer ces évènements,
afin d'executer une fonction.

Les Evenements : MOUSE (souris)
     click      : au clic sur un element
     mouseenter : la souris passe au dessus de la zone qu'occupe un élément
     mouseleave : la souris sort de cette zone

Les Evenements : KEYBOARD (Clavier)

     keydown   : une touche du clavier est enfoncée
     keyup     : une touche a été relachée
     
Les Evenements : WINDOW (Fenetre)
     
     scroll    : défilement de la fenêtre
     resize    : redimensionnement de la fenêtre

Les Evenenement : FORM (formulaire)

     change    : pour les éléments <input>, <select> et <texture>
     submit    : à l'envoi (soumission) d'un formulaire

Les Evenement  : DOCUMENT
     
     DOMContentLoaded  : Executé lorsque le document est 
     completement chargé sans attendre le CSS et les images
--------------------------------------------------------------------------------------*/

/*------------------------------------
            LES ECOUTEURS D'EVENEMENTS

Pour attacher un évènement à un élément ,ou autrement dit ,
pour déclarer un ecouteur d'évènement qui se chargera de lancer un action,
c'est une fonction pour un évènement donné ,je vais utilisé la synthaxe suivant :            
--------------------------------------*/
var p = document.getElementById('MonParagraphe');
console.log(p);

// -- Je souhaite que mon paragraphe soit rouge au clic de la souris
   
    // -- 1 / Je defini une fonction chargéé d'executer cette action 
    function changeColorToRed(){
        p.style.color = "red";
    }

// -- 2 / Je déclare un écouteur qui se chargera d'appeler la fonction au déclenchement de l'évènement (click)
p.addEventListener ('click' , changeColorToRed);


/*------------------------------------------------------------------------------
                                 EXERCICE PRATIQUE
à l'aide de javascript, créez un champs "input" type text avec
un ID unique. Affichez ensuite dans une alerte, la saisie de l'utilisateur                     
------------------------------------------------------------------------------*/
 //-- 1 Création du champ input

var input = document.createElement('input')

// -- 2 Attributtion d'un attribut

input.setAttribute('type' ,'text');
input.setAttribute('placeholder', 'saississez un contenu...')

// -- 3 Attribut d'un ID
input.id = "MonInput";

// -- Ajout d'un element a ma page

document.body.appendChild(input)

/*input.addEventListener('change', function() {
    alert(input.value)
})*/

function voirLaSaisieDeMonInput(){
    alert(input.value);
}
input.addEventListener('change',voirLaSaisieDeMonInput);



