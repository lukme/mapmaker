let li = document.querySelectorAll('.left-container li');
const rightCont = document.querySelector('.right-container'),
  rightContX = document.querySelector('.right-container i');

for (let i = 0; i < li.length; i++) {
  li[i].addEventListener('click', function () {
    // Remove active li
    for (var k = 0; k < li.length; k++) {
      li[k].classList.remove('li-active');
    }
    // End remove active li
    if (rightCont.classList.contains('hiddenRight')) {
      rightCont.className = 'right-container shownRight';
    }
    else if (rightCont.classList.contains('shownRight')) {
      rightCont.style.animation = 'pushImg 500ms forward';
    }
    document.querySelector('.right-container h2').innerText = this.children[0].innerText;
    document.querySelector('.right-container p').innerText = this.children[1].innerText;
    li[i].classList.add('li-active');
  });
};

rightContX.addEventListener('click', () => {
  // Close right cont
  rightCont.className = 'right-container hiddenRight';
  for (var k = 0; k < li.length; k++) {
    li[k].classList.remove('li-active');
  }
  // End close right cont
});

