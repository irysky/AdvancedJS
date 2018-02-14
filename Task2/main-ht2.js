function replaceElements(oldTag, newTag, dataArr) {
  var oldTag = document.querySelectorAll(oldTag)[0];
  var newEl = document.createElement(newTag);

// Copy the attributes
  for (index = oldTag.attributes.length - 1; index >= 0; --index) {
    newEl.attributes.setNamedItem(oldTag.attributes[index].cloneNode());
  }

  for (i = 0; i < dataArr.length; i++) {
      newEl.setAttribute(Object.values(dataArr[i])[0], Object.values(dataArr[i])[1]);
  }

  newEl.innerHTML = oldTag.innerHTML;
  oldTag.parentNode.replaceChild(newEl, oldTag);
}

