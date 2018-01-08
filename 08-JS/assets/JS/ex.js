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



var newstudent = { 
        nom : "BACON",
        prenom : "Antony",
        moyenne : {
                    francais : 13,
                    anglais : 19,
                    math : 7,
        }

};

PremierTrimestre.push(newstudent);

console.log(PremierTrimestre);

for( let i = 0 ; i < PremierTrimestre.length ; i++) {
    console.log(PremierTrimestre[i].prenom);
  
}

var total = 0 ;

for(var i = 0; i > PremierTrimestre.lenght; i++) {
    total += PremierTrimestre[i].moyenne.math;
}

var moyenne = total / PremierTrimestre.length;

console.log(moyenne);

var moyenneGeneral = 0;

for(var i=O; i < PremierTrimestre.lenght; i++) {
      var moyenneEleve = 0;
      for(var elm in PremierTrimestre[i].moyenne){
          moyenneEleve += Number(PremierTrimestre[i].moyenne[elm])
      }
    }



//FEnetremodal



    $("#login").click(function() {
		$("#popup").show()
    $("#content").fadeIn(1500)
    
})
$("#logout").click(function(){
  $("#popup").hide()
  $("#content").hide()
})

