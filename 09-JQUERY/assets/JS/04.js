  // quand je soumet le formulaire il disparait
       
  $( "#MonFormulaire" ).submit(function(event) {
      // cette fonction anonyme sera excuté à la soumission du formulaire.

      //-- Permet d'annuler l'action par défaut du submit du formulaire
    event.preventDefault();
     // -- On remplace notre formulaire par le paragraphe ci dessous.  
    $(this).replaceWith('<p> Bonjour ' + $('#nomcomplet').val() + '!</p>')
  })
  
 
  

  // : console.log($(this));


        