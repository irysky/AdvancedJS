(function(){
  var list = document.querySelector('ul[data-clear-items="true"]');
  var listItems = list.getElementsByTagName('li');
  var doWithInterval= setInterval(function(){
    list.removeChild(listItems[listItems.length - 1]);
  }, list.getAttribute('data-clear-timeout')*1000);




}());
function stopFunction() {
  clearInterval(doWithInterval);
}
var doWithInterval;