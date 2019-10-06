const navHandle = document.querySelector('.nav-container i'),
  mobNav = document.querySelector('.mobNav'),
  mobNavLi = document.querySelectorAll('.mobNav li'),
  mobNavLiA = document.querySelectorAll('.mobNav li a');
let screenWidth = screen.width,
  screenHeight = screen.height;

// Open-close the mobile menu
if (screenWidth < 1200) {
  navHandle.addEventListener('click', initNav);
}

let navCount = 0;
function initNav() {
  if (navCount % 2 == 0) {
    mobNav.className = 'mobNav slideFromRight';
    let count = 0,
      x = setInterval(function () {
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
