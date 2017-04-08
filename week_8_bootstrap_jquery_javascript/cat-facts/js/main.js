$(document).ready(function() {
 // do stuff
 console.log("is jQuerying")
   $("#catFactButton").on('click', function(){
     var randomNumber = Math.floor(Math.random()*20)+1
     getMeACatFact(randomNumber)
   })


   function getMeACatFact(pageNumber) {
     $.ajax({
       url: `http://www.catfact.info/api/v1/facts.json?page=${pageNumber}`,
       datatype: 'jsonp',
       crossDomain: true,
       success: function(data) {
         var randomNumber= Math.floor(Math.random()*24)
         var catFact = data.facts[randomNumber].details

         $('p.cat-facts').hide().text(catFact).fadeIn(1500)
       }
     })
   }
})
