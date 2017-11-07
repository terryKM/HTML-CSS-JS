/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.

    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****

II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) de sa moyenne à chaque matière, puis sa moyenne générale. 
*/

var PremierTrimestre = [
    {
         nom       :   "LIEGEARD",
         prenom    :   "Hugo",
         moyenne   :   {
                            francais : 4,
                            math     : 8,
                            physique : 18
                        }
    },
    {
        nom       :   "BACON",
        prenom    :   "Terry",
        moyenne   :   {
                            francais : 6,
                            math     : 15,
                            physique : 9,
                            anglais  : 15.5
                        }
    },
    {
        nom       :   "EDOUARD",
        prenom    :   "Marvin",
        moyenne   :   {
                            francais : 10,
                            math     : 15,
                            physique : 16
                        }
    }
];





//Pour i = 0 ; tant que i est inférieur au nombre d'élément de PremierTrimestre, alors j'incrémente i de 1.
document.write('<ul>');
for(let i=0 ; i < PremierTrimestre.length ; i++ ){
    
        console.log(PremierTrimestre[i].prenom);
        document.write('<li>' + PremierTrimestre[i].prenom + '</li>');
     //   document.write('<li>' + PremierTrimestre[i].nom + '</li>')
        
    }
    document.write('</ul>');