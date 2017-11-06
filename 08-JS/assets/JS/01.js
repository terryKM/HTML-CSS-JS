//alert("WOW tu es sur ma page")

// deux slash pour faire un commentaire uniligne 

/*
  Ici, je peux faire un commentaire sur plusieurs lignes ...

  RACCOURCI : CTRL + /
          ou CTRL + SHIFT +/
*/  

//-- 1: Déclarer une variable JS :
var Prenom;

// -- 2 : Affecter une Valeur :
Prenom = "Terry";

// -- 3 : Afficher la valeur de ma Variable das la console.
console.log(Prenom);

/*------------------------
    LES TYPES DE VARIABLES 
 -------------------------*/
 
//-- Ici typeof me permet de connaitre le type de ma variable 
 console.log(typeof Prenom);
 
// -- Déclaration et Affectation d'une valeur à une variable  
 var Age = 40;

//-- aficher dans la Console
  console.log(Age);

//-- Vérifier son type
console.log(typeof Age);  

      /*-----------------------------------------
                    LA PORTEE DES VARIABLES

       Les variables déclarées directement à la racine du fichiers 
       sont appelées variables "globlales".

       Elles sont disponibles dans l'ensemble de notre document
       y compris dans les fonctions /boucles.

       La portée des variables globales s'arrête au fichier.
       Si je change de page, les variables n'existe plus !

       Les variables déclarées à l'intérieur d'une fonction 
       sont appelées variables "locales".

       Elles sont disponibles uniquement à l'interieur de celle-ci.

       ------------------------------------------------------------*/


// -- Les Variables FLOAT

var uneDecimale = -2.984;
console.log(uneDecimale);
console.log(typeof uneDecimale);

//-- Les Booléens (VRAI/FAUX)

var unBooleen = false;// -- true
console.log(unBooleen);
console.log(typeof unBooleen);

/*-----------------------------------------------------------  
                          LES CONSTANTES
       La déclaration CONST permet de créer une constante accessible 
       uniquement en lecture.
       
       Sa valeur ne pourra pas être modifiée par des réaffectations
       ultérieures.

       Une constante ne peut pas être déclarée à nouveau.

       Généralement par convention, les constantes sont en MAJUSCULES.

---------------------------------------------------------------------*/

const HOST     ="localhost";
const USER     ="root";
const PASSWORD ="mysql";

//--


/*-----------------------------------------------------------------
                LA MINUTE INFO
          au fu et a mesure que l'on affecte ou ré affecte des valeurs à une variable, 
          celle-ci prend la nouvelle valeur et le nouveau type !
          
          En javascript (ECMA Script), Les variables sont auto-typées.

          Pour convertir une variable de tupe NUMBER en  STRING et STRING en NUMBER
          je peux utiliser les fonctions natives de javascript.

-------------------------------------------------------------------*/     

console.log("---");

var unNombre ="24";
console.log(unNombre);
console.log(typeof unNombre);

/* La fonction parseInt() pour retrouver un Entier à partir 
d'unr chaine de caractère.*/
unNombre =parseInt(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// Je ré affecte une valeur à ma variable 
unNombre = "12.55";
console.log(unNombre);
console.log(typeof unNombre);

/* La fonction parseFLoat permet de retourner un Float à partir d'une chaine de caractère.*/
unNombre = parseFloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// -- Conversion d'un nombre en String avec toString()
var unNombreQuiDevientString = 10;
console.log(unNombreQuiDevientString.toString());
console.log(unNombreQuiDevientString); 


