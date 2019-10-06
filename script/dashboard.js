let li = document.querySelectorAll('.nav-container li');
const homepageHandle = document.querySelector('.homepage-handle');
const homepageInfo = document.querySelector('.homepage-info');
const projectsCont = document.querySelectorAll('.projects');
const accountCont = document.querySelectorAll('.account');
const interfaceCont = document.querySelectorAll('.interface');
const paymentCont = document.querySelectorAll('.payment');
const mobNavHandle = document.querySelector('.fa-bars');
const navLi = document.querySelectorAll('.nav-container ul li');
const nav = document.querySelector('.nav-container');
const dashContent = document.querySelector('.container .content');
navDashCount = 0;

// Navigation
for (let i = 0; i < li.length; i++) {
  // Remove active nav
  li[i].addEventListener('click', function () {
    (() => {
      for (var k = 0; k < li.length; k++) {
        li[k].classList.remove('nav-active');
        li[k].classList.add('nav-passive');
      }
      if (screenWidth < 451) {
        nav.className = 'nav-container slideToLeft';
        for (let i = 0; i < navLi.length; i++) {
          navLi[i].classList.remove('shownLeft');
          navLi[i].classList.add('hiddenLeft');
        }
        navDashCount++
      }
    })();
    // End remove active nav
    this.classList.remove('nav-passive');
    this.classList.add('nav-active');
  })
}

// Show HomePage info
if (screenWidth > 450) {
  homepageHandle.addEventListener('mouseover', function () {
    homepageInfo.className = "homepage-info homepage-active";
  })
  homepageHandle.addEventListener('mouseout', function () {
    homepageInfo.className = "homepage-info homepage-passive";
  })
}

// Slide content
const pages = [projectsCont, accountCont, interfaceCont, paymentCont]
for (let i = 0; i < navLi.length; i++) {
  navLi[i].addEventListener('click', function () {
    for (let k = 0; k < pages.length; k++) {
      pages[k][0].classList.remove('visible')
      pages[k][0].classList.add('hidden')
    }
    pages[i][0].classList.remove('hidden')
    pages[i][0].classList.add('visible')

    // When needed - make container scrollable
    if (navLi[1].classList.contains('nav-active') || navLi[3].classList.contains('nav-active')) {
      dashContent.style.overflowY = "auto";
      dashContent.style.overflowX = "hidden";
    } else {
      dashContent.style.overflowY = "unset";
      dashContent.style.overflowX = "unset";
    }

  });
}

// Mobile nav
if (screenWidth < 1201) {
  mobNavHandle.addEventListener('click', () => {
    if (navDashCount % 2 == 0) {
      nav.className = 'nav-container slideFromLeft';
      let count = 0
      let x = setInterval(function () {
        navLi[count].classList.remove('hiddenLeft');
        navLi[count].classList.add('shownLeft');
        count++
        if (count == 4) {
          clearInterval(x)
        }
      }, 100);
      navDashCount++
    }
    else {
      nav.className = 'nav-container slideToLeft';
      for (let i = 0; i < navLi.length; i++) {
        navLi[i].classList.remove('shownLeft');
        navLi[i].classList.add('hiddenLeft');
      }
      navDashCount++
    }
  });
  for (i = 0; i < navLi.length; i++) {
    navLi[i].classList.add('hiddenLeft');
    navLi[i].addEventListener('click', () => {
      nav.className = 'nav-container slideToLeft';
      for (let i = 0; i < navLi.length; i++) {
        navLi[i].classList.remove('shownLeft');
        navLi[i].classList.add('hiddenLeft');
      }
      navDashCount++
    })
  }
}






// End script
