/*--------------------------
   LE CHAINAGE DE METHODES
--------------------------*/

$(function(){

    //-- Je souhaite cacher toutes les div de ma page HTML
    //-- console.lo($('div));

    $('div').hide('slow',function() {
        // -- une fois que la méthode hide() est terminéé, mon alerte peut s'executer.
        alert('Fin du hide');

        // -- NOTA BENE : La fonction s'excecutera pour l'ensemble des éléments du sélecteur.

        // -- CSS
        $('div').css('background','grey');
        $('div').css('color','red');

        // -- Je fais réapparaitre mes DIVs
        $('div').show('slow');
    }); // Fin fonction anonyme

    // -- En utilisant le chainage de méthode vous faire s'enchainer plusieurs fonctions les unes après les autres ...

    $('p').hide(1000).css('color','blue').css('font-size','20px').delay(2000).show(500);

    // -- Mais c'est trop long !!!

    $('p').hide(1000).css({'color':'green','font-size':'20px'}).delay(2000).show(500);
   
});