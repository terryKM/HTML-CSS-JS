// -- déclarer un Tableaux Numérique
var montableau = [];
var myArray    = new Array;

// -- Affecter des valeurs à un tableau numérique
montableau[0] = "Terry";
montableau[1] = "Nathan";
montableau[2] = "Lou";

//-- Afficher le contenu de mon tableau dasn la console .
console.log(montableau[0]); // -- Terry
console.log(montableau[1]); // -- Nathan
console.log(montableau); // -- Affiche toutes les données

//-- Déclarer et Affecter des valeurs à un Tableau Numérique
var NosPrenoms = ["Emilie","Hocine","Terry","Benjamin","Hugo"];
console.log(NosPrenoms);
console.log(typeof NosPrenoms);

//-- Déclarer et Affecter des Valeurs à un objet .
// : (Pas de Tableau Associatif en JS)

var Coordonnee = {
    prenom : "Terry",
    nom    : "BACON",
    age    : 23
};

console.log(Coordonnee);
console.log(typeof Coordonnee);

//-- Je vais d'abord créer 2 tableaux numériques
var listeDePrenoms =["Terry","Rodrigue","Benjamin"];
var listeDeNoms    =["BACON","NOUEL","JOURAND"];

// -- Je vais créer un tableau à 2 dimensions à partir de mes 2 tableau précédent.

var Annuaire =[listeDePrenoms, listeDeNoms];
console.log(Annuaire);

// -- Afficher sur ma page le nom et Prénom de Rodrigue.
document.write(Annuaire[0][1]);
document.write(" ");
document.write(Annuaire[1][1]);


   /*---------------------------------------------------------
                    EXERCICE 
            Créer un tableau à 2 dimensions appelé
            "AnnuaireDesStagiaires" qui contiendra
            toutes les coordonnées pour chaque stagiaire
            
            Ex: Nom, Prenom , tel
  -----------------------------------------------------------*/    
 /*-- 
  var listeNoms    =["BACON","LIEGEARD","JOURAND"];
  var listePrenoms =["Terry","Hugo","Benjamin"];
  var listeTel     =["0690124652","0690643908","0690516629"];

  var AnnuaireDesStagiaires=[listeNoms,listePrenoms,listeTel];
  console.log(AnnuaireDesStagiaires);

  document.write(AnnuaireDesStagiaires[0][0]);
  document.write(AnnuaireDesStagiaires[0][1]);
  document.write(AnnuaireDesStagiaires[0][2]);
  
  document.write(AnnuaireDesStagiaires[1][0]);
  document.write(AnnuaireDesStagiaires[1][1]);
  document.write(AnnuaireDesStagiaires[1][2]); --*/


  // -- Correction

  var AnnuaireDesStagiaires = [
      {prenom:"Terry",nom:"BACON",tel:"0768 03 53 79"},
      {prenom:"Hugo",nom:"LIEGARD",tel:"0783 97 15 15"},
      {prenom:"Hocine", nom:"ALILI", tel: "XXXX XX XX XX"}
  ];
  console.log(AnnuaireDesStagiaires);
  console.log(AnnuaireDesStagiaires[0]["prenom"]);
  console.log(AnnuaireDesStagiaires[1].prenom);
  console.log(AnnuaireDesStagiaires[2].prenom);



  /*--------------------------------
           AJOUTER UN ELEMENT
   --------------------------------*/
 
   var Couleurs = ["Rouge", "Jaune" , "Vert"];

   // -- Si je souhaite ajouter un élément dans mon tableau 
   //-- Je fait appel à la fonction push() qui me renvoi le nombre d'éléments de mon tableau.

   console.log(Couleurs);
   var nombreElementsDeMonTableau = Couleurs.push("Orange");
   console.log(Couleurs);
   console.log(nombreElementsDeMonTableau);

   /* NB: La fonction unshift() permet d'ajouter un ou plusieurs éléments en début de tableau.


  /*-----------------------------------------------
           RECUPERER ET SORTIR LE DERNIER ELEMENT
   -------------------------------------------------------*/

   /*-- La fonction pop() me permet de supprimer le dernier élément de mon tableau et d'en récupérer la valeur.*/

   var monDernierElement = Couleurs.pop();
   console.log(monDernierElement);
   console.log(Couleurs);

   /*-- La même chose est possible avec le premier élément en utilisant shift()--*/
   /* NB : Lz fonction splice() vous permet de faire sortir un ou plusieurs éléments de votre tableau.*/




  
