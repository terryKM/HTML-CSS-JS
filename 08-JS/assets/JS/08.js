/*------------------------------------
            LES CONDITIONS
--------------------------------------*/

var MajoriteLegaleFR = 18;
if(27 >= MajoriteLegaleFR) {
    alert ("Bienvenue !");
} else {
    alert("Google...");
}


/*-----------------------------------
               EXERCICE
Créer une fonction permettant de vérifier l'âge d'un visiteur
(prompt).
Si il a la majorité légale alors je lui souhaite la bienvenue, 
sinon, je fait une redirection sur Google après lui avoir signalé le soucis.
-------------------------------- */  

var MajoriteLegaleFR = 18;

if(14 >= MajoriteLegaleFR) {
    alert("Bienvenue !");
} else {
    alert("Google...");
}

/* -------------------------------
          EXERCICE 
Créer une fonction permettant de vérifier l'age d'un visiteur (prompt).
S'il a la majorité légale, alors je lui souhaite la bienvenue, 
sinon, je fait une redirection sur Google après lui avoir signalé le soucis.
-------------------------------- */

// 1 -- Déclarer la Majorité Légale
var MajoriteLegaleFR = 18;

// 2 -- Créer une fonction pour demander son age
function verifierAge() {
    // -- METHODE 1 :
    // let age = prompt("Bonjour, Quel age avez-vous ?","<Saisissez votre Age>");
    // age = parseInt(age);
    // return age;

    // -- METHODE 2 :
    return parseInt(prompt("Bonjour, Quel age avez-vous ?","<Saisissez votre Age>"));
}

// 3 -- Une condition pour vérifier si l'age de l'utilisateur est supérieur à la MajoriteLegaleFR.
if(verifierAge() >= MajoriteLegaleFR) 
{
    // 3a. -- J'affiche un message de bienvenue
    alert("Bienvenue sur mon site internet pour les majeurs...");
}
else 
{
    // 3b. -- J'effectue une redirection
    document.location.href = "http://fr.lmgtfy.com/?q=Majorit%C3%A9+L%C3%A9gale+en+France";
}






    /*-------------------------------------------------------------------------
                     ~ LES OPERATEURS DE COMPARAISON ~

        L'Opérateur de comparaison "=="signifie :egal à
        il permet de vérifier que 2 variables sont identiques
        
        L'opérateur de comparaison "===" signifie : Strictement égal à.
        Il va comparé la valeur et le type de donnée. 

        L'operateur de comparaison "!=" signifie : Différent de
        L'opérateur de comparaison "!==" signifie : Strictement differend de.

------------------------------------------------------------------------------*/

/* -------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen 
d'un email et d'un mot de passe.

Je doit saisir mon email et mon mot de passe afin d'être authentifié sur le site.

En cas d'échec une alert m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.
-------------------------------- */

// -- BASE DE DONNEES
var email, mdp;

email = "wf3@hl-media.fr";
mdp = "wf3";

// 1 -- Demander son Email à l'utilisateur
var emailUser = prompt("Bonjour, Quel et votre email", "<Saisissez votre Email>");

// 2 -- Je vérifie si l'email saisie (emailUser) correspond à celui en BDD (email)
if(emailUser === email) {
    // 2a. -- Tous est ok, je continu la vérification avec le mot de passe.
    // 2a1. -- Je demande à l'utilisateur son MDP
    var mdpUser = prompt("votre mot de passe ?", "<Saisissez votre Mot de Passe>");

    if(mdpUser === mdp) {
        alert("Bienvenue !");
    } else {
        alert("ATTENTION, nous n'avons pas reconnu votre mot de passe.");
    }

} else {
    // 2b. -- Sinon, les emails ne correspondent pas, je lance une Alert...
    alert("ATTENTION, nous n'avons pas reconnu votre adresse email");
}

// -- EXEMPLE AVEC LES FONCTIONS

/**
 * Vérifie si mon utilisateur est présent en BDD
 */
function monUtilisateurEstCorrect(emailUser,mdpUser) {
    if(emailUser === email && mdpUser === mdp) {
        return true;
    }
    else {
        return false;
    }
}

var emailUser = prompt("Bonjour, Quel et votre email", "<Saisissez votre Email>");

var mdpUser = prompt("votre mot de passe ?", "<Saisissez votre Mot de Passe>");

if(monUtilisateurEstCorrect(emailUser, mdpUser)) {
    alert("Bienvenue " + emailUser);
} else {
    alert("ATTENTION, email/mot de passe incorrect");
}


/*------------------------------------
            LES OPERATEURS LOGIQUES

L'operateur ET : && ou AND 
Si la combinaison emailUser et email correspond ET la combinaison mdpuser et mdp correspond.

Dans cette conditions, les 2 doivent OBLIGATOIREMENT
correspondre pour être validée.
--------------------------------------*/

if(emailUser === email && mdpUser === mdp) {. . .}

/* L'operateur OU : || ou OR
  Si la combianison emailUser et email correspond OU la combinaison mdpUser et mdp correspond.
  Ici, dans cette condition , au moins l'une des deux doit correspondre pour être validée.*/

 if(emailUser === email || mdpUser === mdp ) {. . .}

 //L'operateur "!" : qui signifie le CONTRAIRE DE ... ou encore NOT


 var MonUtilisateurEstApprouve = true;
 if(!MonUtilisateurEstApprouve) {. . .} // -- Si l'utilisateur n'est pas approuvé ...

 //Reviens également à écrire 
 if(MonUtilisateurEstApprouve == false) {. . .}