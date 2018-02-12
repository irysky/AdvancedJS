(function(){
 /* debugger;*/
 /* var ulAll=document.getElementsByClassName('foreground');
  for (n=0; n<ulAll.length; n++) {
    var ulChildNodes = ulAll[n].childNodes;
    var currentColor = '';
    for (i = 0; i < ulChildNodes.length; i++) {
      if (ulChildNodes[i].nodeType === Node.COMMENT_NODE) {
        currentColor = ulChildNodes[i].data;  //data is--text--- $0.backgroundColor = 'red';
      }
      if (ulChildNodes[i].nodeType === Node.ELEMENT_NODE) {
        if (ulChildNodes[i].nodeName === 'LI') {
          ulChildNodes[i].style.color = currentColor;
        }else if (ulChildNodes[i].nodeName === 'SPAN'|| ulChildNodes[i].nodeName === 'BR') {
          ulChildNodes[i].style.backgroundColor = currentColor;
        }
      }
    }
  }*/

  var ulEls = document.getElementsByTagName('UL');
  for (n=0; n<ulEls.length; n++) {
    var ulElement = ulEls[n];
    var ulChildNodes = ulEls[n].childNodes;
    var currentColor = '';
    for (i = 0; i < ulChildNodes.length; i++) {
      var ulChildNodesEl = ulChildNodes[i];
      if (ulChildNodesEl.nodeType === Node.COMMENT_NODE) {
        currentColor = ulChildNodesEl.data;
      }
      if (ulChildNodesEl.nodeType === Node.ELEMENT_NODE) {
        if (ulChildNodesEl.nodeName === 'LI') {
          if (ulElement.className === 'foreground') {
            ulChildNodesEl.style.color = currentColor;
          }
          if (ulElement.className === 'background'){
            ulChildNodesEl.style.backgroundColor = currentColor;
          }
        }
      }
    }
  }
}());
