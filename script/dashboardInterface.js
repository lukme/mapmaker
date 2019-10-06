let content = document.querySelector('.content');
const interfaceOptions = document.querySelectorAll('.interface img');

window.addEventListener('load', function () {
  for (let i = 0; i < interfaceOptions.length; i++) {
    interfaceOptions[i].classList.remove('chosen');
  }
  if (localStorage._backgroundOption == undefined) {
    content.className = "content firstBack";
    interfaceOptions[0].className = 'chosen';
  }
  else if (localStorage._backgroundOption == 0) {
    content.className = "content firstBack";
    interfaceOptions[0].className = 'chosen';
  }
  else if (localStorage._backgroundOption == 1) {
    content.className = "content secondBack";
    interfaceOptions[1].className = 'chosen';
  }
  else if (localStorage._backgroundOption == 2) {
    content.className = "content thirdBack";
    interfaceOptions[2].className = 'chosen';
  }
})

for (let i = 0; i < interfaceOptions.length; i++) {
  interfaceOptions[i].addEventListener('click', function (e) {
    for (let i = 0; i < interfaceOptions.length; i++) {
      interfaceOptions[i].classList.remove('chosen');
    }
    e.target.className = 'chosen';
    localStorage._backgroundOption = i;

    if (localStorage._backgroundOption == 0) {
      content.className = "content firstBack";
    }
    else if (localStorage._backgroundOption == 1) {
      content.className = "content secondBack";
    }
    else {
      content.className = "content thirdBack";
    }
  });
}
