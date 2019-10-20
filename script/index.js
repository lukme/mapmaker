const navBar = document.querySelector('.nav-container'),
  navImg = document.querySelector('.nav-img'),
  navUl = document.querySelector('.nav-ul'),
  scrollBtn = document.querySelector('.scroll-top-btn');

window.onscroll = function () {
  decreaseNav();
  showBtn()
};
window.onload = function () {
  decreaseNav();
  showBtn()
};

// MAKE THE NAV-BAR SMALLER ONSCROLL
function decreaseNav() {
  if (screenWidth > 1600) {
    if (document.documentElement.scrollTop > 350 || document.body.scrollTop > 350) {
      navBar.style.height = '70px';
      navImg.style.height = '40px';
      navUl.style.top = '-7%';
    }
    else {
      navBar.style.height = '100px';
      navImg.style.height = '50px';
      navUl.style.top = '10%';
    };
  } else if (screenWidth < 1600) {
    if (screenWidth > 460) {
      if (document.documentElement.scrollTop > 350 || document.body.scrollTop > 350) {
        navBar.style.height = '70px';
        navImg.style.height = '40px';
        navUl.style.top = '2%';
      }
      else {
        navBar.style.height = '100px';
        navImg.style.height = '50px';
        navUl.style.top = '17%';
      };
    }
  }
}

// SCROLL TOP BUTTON
function showBtn() {
  if (document.documentElement.scrollTop > 350 || document.body.scrollTop > 350) {
    scrollBtn.classList = 'scroll-top-btn scaleOne';
  }
  else {
    scrollBtn.classList = 'scroll-top-btn scaleZero';
  };
};

scrollBtn.addEventListener('click', function () {
  if (CSS.supports('scroll-behavior', 'smooth')) {
    scrollCss(0);
  }
  else {
    scrollJs(0, 200);
  }
})

function scrollJs(target, duration) {
  if (duration <= 0) { return };
  let difference = target - document.body.scrollTop,
    speed = difference / duration * 10;
  setTimeout(function () {
    document.body.scrollTop += speed;
    if (document.body.scrollTop == target) { return };
    scrollJs(target, duration - 10);
  }, 10);
};

function scrollCss(target) {
  document.documentElement.scrollTop = target;
  document.body.scrollTop = target;
}

// Copy number/mail to clipboard onclick
const phone = document.querySelector('.phone-fallen'),
  phoneValue = phone.innerText.slice(0, 11),
  mail = document.querySelector('.mail-fallen'),
  mailValue = mail.innerText.slice(0, 19),
  fallenTextCopy = document.querySelectorAll('.fallen-text-copy');

phone.addEventListener('click', function () {
  copyStringToClipboard(phoneValue)
  initCopyTextChange(0);
});
mail.addEventListener('click', function () {
  copyStringToClipboard(mailValue)
  initCopyTextChange(1);
});

function copyStringToClipboard(val) {
  let el = document.createElement('textarea');
  el.value = val;
  el.style = { position: 'absolute', left: '-9999px' };
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

function initCopyTextChange(val) {
  fallenTextCopy[val].innerText = "Skopiowano!";
  fallenTextCopy[val].style = "animation: push 1000ms;"
  setTimeout(function () {
    copyTextChange();
    fallenTextCopy[val].style = "animation: none;"
  }, 1000);
}

// Make the copy/copied info in contact
function copyTextChange() {
  for (let i = 0; i < fallenTextCopy.length; i++) {
    fallenTextCopy[i].innerText = "Kliknij, by skopiować";
  };
}
copyTextChange()

document.querySelector('.offerOptions').scrollLeft = (360 - (0.47 * screen.width));

// Choose footer option
if (screenWidth > 1200) {
  footer = document.querySelector('.footer-full');
} else {
  footer = document.querySelector('.footer-mob');
}





// End script
