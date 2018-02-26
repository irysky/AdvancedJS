/*
(function(){
 var User = function(userName, userEmail) {
   this.userName = userName;
   this.userEmail = userEmail;

   this.setUserName = function(newUserName) {

   }
   this.setUserEmail(newEmail){
     this.userEmail - newEmail;
   }
 }

}());
*/

/*
(function (){



function Calculate () {
    document.getElementById('result').innerHTML = document.getElementsByTagName("INPUT")[0].value*28;

  }
  document.getElementsByTagName("INPUT")[0].addEventListener("change", Calculate(), false);

}());

*/

//
/*document.getElementsByTagName("INPUT")[0].addEventListener("change", function() {
  document.getElementById('result').innerHTML = document.getElementsByTagName("INPUT")[0].value * 28;
});*/

//
function Calculate() {
  document.getElementById('result').innerHTML = (document.getElementsByTagName("input")[0].value*28).toString();

}
document.getElementsByTagName("input")[0].addEventListener("change", function() {
  Calculate();
});


