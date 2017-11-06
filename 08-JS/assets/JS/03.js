  /*---------------------------
        LA CONCATENATION
   ---------------------------*/
   
var debutDePhrase      = " Aujourd'hui "
var dateDuJour         = new Date();
var suiteDePhrase      =", sont présents :";
var nombreDeStagiaires = 21;
var finDePhrase        =" stagiaires.<br>";

/*-- Nous souhaitons maintenant, grâce à la concatenation, afficher tout ce petit monde, en un seul morceau !*/

document.write(debutDePhrase + dateDuJour.getDate() + "/" + (dateDuJour.getMonth() +1) + "/" +dateDuJour.getFullYear() 
+ suiteDePhrase + nombreDeStagiaires + finDePhrase );

/*-------------------------------------------------------------------
                              EXERCICE :
   Créez une concatenation à partir des éléments, en un seul morceau !
   ------------------------------------------------------------------*/

   var phrase1 = "Je m'appelle ";
   var phrase2 = "Terry et j'ai ";
   var age     = 23;
   var phrase3 ="ans !";

   document.write(phrase1 + phrase2 + age +phrase3);