window.addEventListener('scroll', () => {
  let parent = document.getElementById('parallax-container');
  let child = parent.getElementsByTagName('div');
  for(let i = 0; i < child.length; i++){
    child[i].style.transform = 'translateY(-' + (window.pageYOffset * i / child.length) / 2 + 'px)'
  }
},
false)

let computers = parent.getElementByClasses('parallax-computers');
for(let i = 0; i < computers.length; i++){
  computers[i].style.transform = 'translateY(-' + (window.pageYOffset) + 'px)'
}
