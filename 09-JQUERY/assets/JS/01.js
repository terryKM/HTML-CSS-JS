/*--------------------------------------------------------
                 ~ ~ La disponibilité du DOM ~ ~
 à partir du moment ou mon DOM, c'est à dire l'ensemble de
 l'arborescence de ma page est complètement chargé, je peux 
 commencer à utiliser jQuery.
 
 Je vais mettre l'ensemble de mon code dasn une fonction,cette
 fonction sera appelé AUTOMATIQUEMENT par jQUERY lorsque le DOM
 sera complètement défini.

 3 façons de faire :
 -----------------------------------------------------------*/

 jQuery(document).ready(function(){
     //-- Ici, le DOM est entièrement chargé, je peux procéder à mon code JS
 });

 //-- 2eme possibilité
 $(document).ready(function(){
     //-- Ici, le DOM est entièrement chargé, je peux procéder à mon code JS
 });

 //-- 2eme possibilité
 $(document).ready(function() {
     //-- Ici, le DOM est entièrement chargé, je peux procéder à mon code JS
 });

 //-- 3eme possibilité
 $(function(){
     //-- Ici, le DOM est entièrement chargé, je peux procéder à mon code JS
     alert("J'ai 20 ans !");

     //-- en JS :
     document.getElementById('TexteEnJQuery').innerHTML = "<strong> Mon Texte en JS </strong>";

     //en jQuery les sélecteur sont les mêmes qu'en CSS : 
     $('#TexteEnJQuery').html("Mon Texte en JQ !");

 });

 