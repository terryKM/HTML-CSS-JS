$(function() {
   
        var membres = [
          {'pseudo':'Hugo','age':26,'email':'wf3@hl-media.fr','mdp':'wf3'},
          {'pseudo':'Rodrigue','age':56,'email':'rodrigue@hl-media.fr','mdp':'roro'},
          {'pseudo':'James','age':78,'email':'james@hl-media.fr','mdp':'james8862'},
          {'pseudo':'Emilio','age':18,'email':'milio@hl-media.fr','mdp':'milioDu62'}
        ];


        //--Initialisation des Variables
        nombreDesMembres = membres.length;

        //-- Récupération de différents éléments
        var form         = $('form');
        var bienvenue    = $('#Bienvenue');
        var pseudo       = $('#pseudo');
        var age          = $('#age');
        var email        = $('#email');
        var mdp          = $('#mdp');
        var submit       = $('#submit');
        var pseudoError  = $('.pseudoError');
        var ageError     = $('.ageError');
       
   

    //-- ETAPE 1 & 3  
    


    //--1a écouter la saisie du pseudo de l'utilisateur
    pseudo.on('input', function(e){
         
        // -- A. Parcourir mon tableau de membre
        for(let i = 0 ; i < nombreDesMembres ; i++) {

            // -- B.Si la saisie d'un pseudo en cours par mon utilisateur correspond à un pseudo dans mon tableau de membre, alors ma condition s'applique.
            if(pseudo.val() === membres[i].pseudo) {
                // -- C. J'ai trouvé une correspondance, je vais avoir un message d'alerte.
                
                //--J'affiche une erreur
                pseudoError.fadeIn();
                
                //-- Je vide le titre bienvenue
                bienvenue.text('');
                
                //--Je désactive le bouton 
                submit.attr('disabled', true);
                
                //--Je stop la boucle
                break;
           
            } else {
                //-- On cache le pseudo et réactive le bouton 
                pseudoError.fadeOut();
                submit.removeAttr('disabled');
                //--On affiche le pseudo en guise de Bienvenue
                bienvenue.text("Bienvenue"+ " "+ pseudo.val());
            }
        }
    });

    age.on('change' , function (e){
        if(age.val() >= 17 ) {
            ageError.fadeIn();
            submit.attr('disabled',true);
        } else{
            ageError.fadeOut();
            submit.removeAttr('disabled')
        }
    });

    //--4a
    form.on('submit', function(event){

        // -- Arret de propagation du submit
        even.preventDefault();
        
        // -- Création d'un objet contact
        let contact ={
            pseudo    : pseudo.val(),
            age       : age.val(),
            email     : email.val(),
            mdp       : mdp.val(),
        }
       
        membres.push(contact);
        nombreDesMembres = membres.length
    })
    
    //-- 4B
       
       //-- Affichage de ma liste de membre
       function executelist(contact) {
           $(`
           <p>Merci ${contact.pseudo} ! </p>
           <br> <br> <strong> Tu es maintenant inscrit Bravo ...</strong>
           <br><br> <u>Voici la liste de nos membres : </u>
           </p>
           `).appenTo($('body'));

           //-- Générer la liste des membres
           var ul = $('<ul>');
           for(let i = 0 ; i < nombreDesMembres ; i++) {

              $(`<li>${contact.pseudo} : $`) 
           }
       }

});