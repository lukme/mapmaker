const navHandle = document.querySelector('.nav-container i');
const mobNav = document.querySelector('.mobNav');
const mobNavLi = document.querySelectorAll('.mobNav li');
const mobNavLiA = document.querySelectorAll('.mobNav li a');
let screenWidth = screen.width;
let screenHeight = screen.height;

// Open-close the mobile menu
if (screenWidth < 1200) {
  navHandle.addEventListener('click', initNav);
}

navCount = 0;
function initNav() {
  if (navCount % 2 == 0) {
    mobNav.className = 'mobNav slideFromRight';
    let count = 0
    let x = setInterval(function () {
      mobNavLi[count].classList.remove('hiddenRight');
      count++
      if (count == 4) { clearInterval(x) }
    }, 100);
    navCount++
  }
  else {
    mobNav.className = 'mobNav slideToRight';
    for (let i = 0; i < mobNavLi.length; i++) {
      mobNavLi[i].classList.add('hiddenRight');
    }
    navCount++
  }
}

for (let i = 0; i < mobNavLiA.length; i++) {
  mobNavLiA[i].addEventListener('click', function () {
    mobNav.className = 'mobNav slideToRight';
    for (let i = 0; i < mobNavLi.length; i++) {
      mobNavLi[i].classList.add('hiddenRight');
    }
    navCount++
  });
}
