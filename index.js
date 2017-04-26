function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list')

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + n).toString()
  }
}

function deepestChild() {
  let grandNode = document.querySelector('div#grand-node')
  let amountOfDivs = grandNode.querySelectorAll('div').length
  return document.querySelector(`div#grand-node${" div".repeat(amountOfDivs)}`)
}

// The method below was the first thing that came to mind. I realized I definitely
// overcomplicated things by implementing a loop, and condensed the whole function
// into the function above. I find that solution to be much more
// efficient, and also kind of cool!

// function deepestChild() {
//   var amountOfDivs = document.querySelector('div#grand-node').querySelectorAll('div').length
//   var arrayOfTheWordDiv = []
//   for (let i = 0; i < amountOfDivs; i++) {
//     arrayOfTheWordDiv.push('div')
//   }
//   return document.querySelector(`div#grand-node ${arrayOfTheWordDiv.join(' ')}`)
// }
