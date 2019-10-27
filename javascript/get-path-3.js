function tagNameHelper(el, idx) {
  return `${el.tagName}:nth-child(${idx})`
}

function indexFinder(el) {
  let currentElOrSibling = el;
    
  // Index all parent elements
  let idx = 1;
  while(currentElOrSibling.previousElementSibling) {
    idx++;
    // Reassign sibling element
    currentElOrSibling = currentElOrSibling.previousElementSibling;
  }
  
  return idx;
}

function getPath (htmlElement) {
  // Find by ID
  const id = htmlElement.getAttribute('id');

  if(id) {
    return `#${id}`;
  }

  let { parentNode } = htmlElement;
  const path = [];
  
  // Find all parents path
  while(parentNode && parentNode.tagName !== 'BODY') {
    const idx = indexFinder(parentNode);
    
    // Add tagName to array
    path.unshift(tagNameHelper(parentNode, idx));
    parentNode = parentNode.parentNode;
  }

  const idx = indexFinder(htmlElement);
  const result = path.join(' > ').concat(` > ${tagNameHelper(htmlElement, idx)}`)
  return result;
};

// Testing
// Go to a browser and select element from Elements tab in Developer Tools
pathTest = getPath($0);
console.log(document.querySelector(pathTest) === $0);
console.log(document.querySelectorAll(pathTest).length === 1);
console.log(document.querySelectorAll(pathTest)[0] === $0);
