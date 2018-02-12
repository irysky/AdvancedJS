(function(){
    debugger;
    var ul1=document.getElementsByClassName('foreground')[0];
    var ulChildNodes = ul1.childNodes;
    for (i = 0; i < ulChildNodes.length; i++) {
       if (ulChildNodes[i].nodeType === Node.COMMENT_NODE) {
           /*console.log(ulChildNodes[i]);*/
           var currentColor = ulChildNodes[i].data; /*data is--text---*/

           console.log(currentColor);
           /*$0.backgroundColor = 'red';*/
           if (ulChildNodes[i].nodeType === Node.ELEMENT_NODE /*&& ulChildNodes[i].getElementsByTagName === 'li'*/) {
               ulChildNodes[i].style.color = currentColor;
               console.log('11== ' + ulChildNodes[i].style.color);
           }
       }
    }

  /*var ulAll=document.getElementsByClassName('foreground');
   for (n=0; n<ulAll.length; n++) {
   var ulChildNodes = ulAll[n].childNodes;
   var currentColor = '';
   for (i = 0; i < ulChildNodes.length; i++) {
   if (ulChildNodes[i].nodeType === Node.COMMENT_NODE) {
   currentColor = ulChildNodes[i].data;
   }
   if (ulChildNodes[i].nodeType === Node.ELEMENT_NODE) {
   if (ulChildNodes[i].nodeName === 'LI' || ulChildNodes[i].nodeName === 'BR') {
   ulChildNodes[i].style.color = currentColor;
   }
   }
   }
   }
   var ulAll=document.getElementsByClassName('background');
   for (n=0; n<ulAll.length; n++) {
   var ulChildNodes = ulAll[n].childNodes;
   var currentColor = '';
   for (i = 0; i < ulChildNodes.length; i++) {
   if (ulChildNodes[i].nodeType === Node.COMMENT_NODE) {
   currentColor = ulChildNodes[i].data;  //data is--text--- $0.backgroundColor = 'red';
   }
   if (ulChildNodes[i].nodeType === Node.ELEMENT_NODE) {
   if (ulChildNodes[i].nodeName === 'LI' || ulChildNodes[i].nodeName === 'BR') {
   ulChildNodes[i].style.backgroundColor = currentColor;
   }
   }
   }
   }*/
}());
