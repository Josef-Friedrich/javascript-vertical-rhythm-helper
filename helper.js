elementMain = document.querySelector('main')

// Lists recursivley
//elements = elementMain.querySelectorAll('*')

// Lists recursivley and text nodes
//elements = elementMain.childNodes

// Lists recursivley
//elements = elementMain.getElementsByTagName('*')

let elements = elementMain.children

let lastTagName = ''

for (let i = 0; i < elements.length; i++) {
  console.log(i)

  let element = elements.item(i)

  let currentTagName = element.tagName

  if (lastTagName === currentTagName) {
    element.classList.add('successive-paragraph')
  }

  console.log(element.tagName)

  lastTagName = element.tagName
}