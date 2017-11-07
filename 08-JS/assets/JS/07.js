/* --
    Votre mission, que vous devez accepter !
    Réaliser une fonction permettant à un internaute de :
        - Saisir son Prénom dans un Prompt
        - Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ?
        - Saisir son Age
        - Retourner à l'Utilisateur : Tu est donc né en [ANNEE DE NAISSANCE].
        - Afficher ensuite un récapitulatif dans la page.
        Bonjour [PRENOM], tu as [AGE] ! 
-- */

/*
function PromptMessage() {
    //Je lui demande son prénom
    var Prenom = prompt("Saisissez votre prenom :")
    console.log(Prenom);
    //Je lui demande son age
    var Age = prompt("Bonjour" + Prenom + " quel âge as-tu ?")
    console.log(Age);
    
}
PromptMessage()*/

// 1. -- Initialisation des variables
var DateObj       = new Date ()
var AnneeActuelle = DateObj.getFullYear()


// 2 -- Création de ma fonction
function hello() {
    
    // 2a. -- Je demande à l'utilisateur son Prénom
    let prenom = prompt("Hello ! What is your name ?","Prénom");
    console.log(prenom);
    console.log(typeof prenom);

    //2b. -- Je lui demande son âge
    let age = parseInt (prompt("Hello " + prenom + " ! How old are you ?","<saisir votre âge>"));
    console.log(age);
    console.log(typeof age);

    // 2c. -- J'affiche une alerte avec son année de naissance
    alert("Amazing ! So you are born in " + (AnneeActuelle - age) +" !");

    // 2d. -- Affichage dans ma page HTML
    document.write("Hello " + prenom + " it's AMAZING ! you're " + age + " years old !");
}
hello()
