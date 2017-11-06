/*------------------------------
   LES OPERATEURS ARITHMETIQUES
--------------------------------*/

// ~ ~ L'Addition ~ ~ //

  //-- Déclaration de plusieurs variables à la suite
      var nb1, nb2, resultat;

      nb1 = 10;
      nb2 = 3;
   
  //-- Addition de nb1 + nb2 avec l'operateur "+"
  resultat = nb1 + nb2;
  
  //-- Affichage du resultat dans la console
  console.log("L'Addition de nb1 et nb2 est égale à :" + resultat);


// ~ ~ La Soustraction ~ ~ //
   
   // -- La soustraction de nb1 et nb2 avce l'operateur "-"
   resultat = nb1 - nb2;
   
   // -- Affichage du résultat dans la console
   console.log("La soustraction de nb1 et nb2 est égale à:"+resultat);

  
// ~ ~ La Multiplication ~ ~// 
   
   // -- La Multipliaction de nb1 et nb2 avec l'operateur "*"
   resultat = nb1 * nb2;

   // -- Affichage du résultat dans la console
   console.log("La multiplication de nb1 et nb2 est égale à:"+ resultat);


// ~ ~ La Division ~ ~// 
   
   // -- La Division de nb1 et nb2 avec l'operateur "/"
   resultat = nb1 / nb2;
   
      // -- Affichage du résultat dans la console
      console.log("La division de nb1 et nb2 est égale à:"+ resultat);   


// ~ ~ Le Modulo ~ ~// 
   
   // -- Le résultat du Modulo est le reste de la division.

    // -- Le Modulo de nb1 et nb2 avec l'operateur "%"
    nb1 = 11;
    resultat = nb1 % nb2;
   
    // -- Affichage du résultat dans la console
      console.log("Le Modulo de nb1 et nb2 est égale à:"+ resultat);    
      
      


/*------------------------------
   LES ECRITURES SIMPLIFIEES
--------------------------------*/

nb1 = 15;
nb1 = nb1 + 5;
console.log(nb1);

nb1 += 5; // -- Ce qui équivaut à écrire nb1 = nb1 + 5;
console.log(nb1);

//- Je peux procéder de la même manière pour tous les autre opérateurs arithmétiques :
// :"+", "-", "/", "*", "%"