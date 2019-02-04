
// Lists recursivley
//elements = elementMain.querySelectorAll('*')

// Lists recursivley and text nodes
//elements = elementMain.childNodes

// Lists recursivley
//elements = elementMain.getElementsByTagName('*')

/**
 * Add the class “'successive-paragraph'” to successive paragraphs and
 * the class “long-paragraph” to long paragraphs.
 *
 * @param {array} selectors - An array of selectors where the paragraphs
 *   are located as child elements
 */
function analizeParagraphs (selectors) {
  for (var i = 0; i < selectors.length; i++) {
    elementMain = document.querySelector(selectors[i])
    var elements = elementMain.children
    var lastTagName = ''
    for (var j = 0; j < elements.length; j++) {
      var element = elements.item(j)
      var currentTagName = element.tagName
      if (currentTagName === 'P') {
        if (lastTagName === currentTagName) {
          element.classList.add('successive-paragraph')
        }
        if (element.textContent.length > 80) {
          element.classList.add('long-paragraph')
        }
      }
      lastTagName = element.tagName
    }
  }
}

analizeParagraphs(['main'])