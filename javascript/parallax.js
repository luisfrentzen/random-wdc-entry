

window.addEventListener('scroll', () => {
  let parent = document.getElementById('parallax-container');
  let child = parent.getElementsByTagName('div');
  for(let i = 0; i < child.length; i++){
    child[i].style.transform = 'translateY(-' + (window.pageYOffset * i / child.length) / 2 + 'px)'
  }

  let texts = document.getElementsByClassName('parallax-computers-text')
  for(let i = 0; i < texts.length; i++){
    texts[i].style.transform = 'translateY(' + (window.pageYOffset/(i+1))/4 + 'px)'
    texts[i].style.opacity = 0.15 + ( i * 0.05 );
  }

  let tos = document.getElementsByClassName('parallax-to-title')

  for(let i = 0; i < tos.length; i++){
      tos[i].style.transform = 'translateX(' + (window.pageYOffset/(i+6)) + 'px)'
  }

  let titles = document.getElementsByClassName('parallax-computers-title')

  for(let i = 0; i < titles.length; i++){
    titles[i].style.transform = 'translateY(-' + (window.pageYOffset/(i+1))/4 + 'px)'
  }

},
false)

var slides = document.getElementsByClassName('slide')

var navbuttons = document.getElementsByClassName('navigation-button')

var firstpage = document.getElementById('parallax-container')

var activePage = 0;

navbuttons[0].addEventListener('click', function() {
  activePage = 0;

  firstpage.scrollIntoView({
    behavior: 'smooth'
  });
})

for(let i = 1; i < navbuttons.length; i++){
  navbuttons[i].addEventListener('click', function() {
    activePage = i;

    slides[i-1].scrollIntoView({
      behavior: 'smooth'
    });
  })
}


function checkPosition(){
  var i = parseInt((window.pageYOffset + window.innerHeight/2) / window.innerHeight);
  if(i != activePage){
    activePage = i;
    for(let j = 0; j < navbuttons.length; j++){
      if(j == activePage) {
        navbuttons[j].style.opacity = 1;
      }
      else {
        navbuttons[j].style.opacity = 0.5;
      }
    }
  }
}
