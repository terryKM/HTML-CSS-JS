
// 1 -- Attente que le dom soit chargé
$(function() {

    // 2. Ecouter l'évènement "submit" du formulaire
$( "#MonFormulaire" ).submit(function(event) {

    // 3 -- Stopper la redirection de la page

  event.preventDefault();

  // 4 -- Récupération des informations

  let fullname = $('#fullname').val()
  let email    = $('#email').val()
  let tel      = $('#tel').val()
  let sujet    = $('#sujet').val()
  let message  = $('#sujet').val()

   // -- On remplace notre formulaire par le paragraphe ci dessous.  
  $(this).replaceWith(`
      <p> Bonjour <strong>${fullname}</strong>
         <em>${email}</em> <br> <br>
         Vous nous avez contacté au sujet de :
         <strong>${sujet}</strong>.<br>
         Nous reviendrons vers vous dans les plus brefs délai au <strong>${tel}</strong> <br> <br>
          <u> Ci-dessous votre message : </u><br>
          ${message}</p>
          `);
}) // fin submit

});
