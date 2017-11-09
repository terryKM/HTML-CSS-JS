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

//-- Petite fonction de raccourci (lesFlemmard.js)

function w(t){
    document.write(t);
}

function l(e){
    console.log(e);
}

//w = document.write
//l = console.log

//Pour i = 0 ; tant que i est inférieur au nombre d'élément de PremierTrimestre, alors j'incrémente i de 1.
w('<ol>');
// -- Je souhaite afficher la liste 
for(let i=0 ; i < PremierTrimestre.length ; i++ ){
    
       //- On recupere l'Objet Etudiant de l'itération
       let Etudiant = PremierTrimestre[i];

       //-- Aperçu dans la console
       l(Etudiant);

       //-- Afficher le Prénom et le Nom d'un étudiant
       w('<li>');
           w(Etudiant.prenom + " " + Etudiant.nom);
            
        // -- Afficher la moyenne de l'étudiant aux différentes matières.
        w('<ul>')
           for(let matiere in Etudiant.moyenne){
           
               l(matiere);
               l(Etudiant.moyenne[matiere]);

               NombreDeMatiere++;
               SommeDesNotes += Etudiant.moyenne[matiere];

               w('<li>');
                 w(matiere + " : " + Etudiant.moyenne[matiere]);
               w('</li>');  
           } //-- Fin de la boucle matière
              w('<li>');
                 w("<strong>Moyenne Générale :</strong>" + (SommeDesNotes / NombreDeMatiere).toFixed(2) );
              w('</li>')   


           w('</ul>');

        w('</li>');
    }
    w('</ol>');