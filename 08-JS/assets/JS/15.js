// déclarer un tableau numérique

var monTableau = ["Hugo","Terry","Romain","Clément","Etienne","David","Hedi","Lou","Emilie","Jerome"];

// Affichage de la console
console.log(monTableau);
console.log(monTableau.length);

// Afficher le prenom
console.log(monTableau[1]);
console.log(monTableau[6]);
console.log(monTableau[7]);
console.log(monTableau[3]);

//Pour récupérer une valeur dans un tableau numérique j'utilise son indice !

var i = 5;
console.log(monTableau[i]);

for( i = 0 ; i < monTableau.length ; i++ );{
    console.log(monTableau [i]);
}

// Voyons comment  procéder avec des objets

var contact = {
    // indice  : valeur
      prenom   : "Terry",
      nom      : "BACON",
      tel      : "0768035379"

}

console.log("prenom : " + contact.prenom)
console.log("nom : " + contact.nom)
console.log("telephone : " + contact.tel)

// Tableau étudiant
var tableauEtudiants = [
    {
        prenom : "Terry",
        nom    : "BACON",
        classe : "programmation"
    },
    {
        prenom : "Etienne",
        nom    : "Dit-jesus",
        classe : "Maternelle"
    },
    {
        prenom : "Hugo",
        nom    : "LIEGEARD",
        classe : "The Warrior Master"
    }
    
    
]
console.log(tableauEtudiants)
 
var nombreEtudiant = tableauEtudiants.length;
console.log("Le nombre d'étudiant est : " + nombreEtudiant);

document.write(" <ul>");
for( i = 0 ; i< nombreEtudiant ; i++) {
    let etudiant = tableauEtudiants[i];
    document.write("<li>" + etudiant.prenom + " " + etudiant.nom + " " + etudiant.classe +"</li>");

}
document.write(" </ul>")