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


function PromptMessage() {
    //Je lui demande son prénom
    var Prenom = prompt("Saisissez votre prenom :")
    console.log(Prenom);
    //Je lui demande son age
    var Age = prompt("Bonjour" + Prenom + " quel âge as-tu ?")
    console.log(Age);
}

PromptMessage()
