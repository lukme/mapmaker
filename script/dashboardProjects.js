let currentDate = 0;
const addProjectBtn = document.querySelector('.add-project'),
  projects = document.querySelector('.projects'),
  addProjectModal = document.querySelector('.add-project-modal-bg'),
  addProjectModalClose = document.querySelector('.add-project-modal i'),
  addProjectModalInput = document.querySelector('.add-project-modal .title'),
  addProjectModalSubmit = document.querySelector('.add-project-modal .submit-add'),
  loaderAddProject = document.querySelector('.add-project-modal .loader'),
  loaderDeleteProject = document.querySelector('.delete-project-modal .loader');

window.addEventListener('load', function () {
  addProjectModalInput.disabled = true;
  addProjectModalSubmit.disabled = true;
})

// Slide items horizontal
const slideTarget = document.querySelector('.projects');
let isDown = false,
  startX,
  scrollLeft;

slideTarget.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - slideTarget.offsetLeft;
  scrollLeft = slideTarget.scrollLeft;
});
slideTarget.addEventListener('mouseleave', () => {
  isDown = false;
});
slideTarget.addEventListener('mouseup', () => {
  isDown = false;
});
slideTarget.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slideTarget.offsetLeft;
  const walk = (x - startX) * 1; //scroll speed
  slideTarget.scrollLeft = scrollLeft - walk;
});

// Add Project Modal
let addProCount = 0;
addProjectBtn.addEventListener('click', function () {
  addProjectModalInput.disabled = false;
  addProjectModalSubmit.disabled = false;
  addProjectModalInput.focus();
  addProjectModal.className = 'add-project-modal-bg visible';
  addProCount++
})
addProjectModalClose.addEventListener('click', function () {
  modalClose();
})

function modalClose() {
  addProjectModalInput.disabled = true;
  addProjectModalSubmit.disabled = true;
  addProjectModal.className = 'add-project-modal-bg hidden';
  addProCount++
  document.querySelector('.add-project-modal .title').value = "";
}

// Add project
function addProject() {
  const title = addProjectModalInput.value;
  if (title == false) {
    alert('Nie wpisano tytułu');
  }
  else {
    if (!projects.children[0].classList.contains('project')) {
      addProjectBtn.style.cssText = "margin-top: 0; margin-bottom: 80px;";
    }
    const project = document.createElement('div'),
      image = document.createElement('div'),
      head = document.createElement('h3'),
      dateStr = document.createElement('p'),
      timeStr = document.createElement('p'),
      menage = document.createElement('div'),
      editBtn = document.createElement('button'),
      publishBtn = document.createElement('button'),
      deleteBtn = document.createElement('button');
    project.classList.add('project');
    image.classList.add('image');
    menage.classList.add('menage');
    timeStr.classList.add('project-time');
    head.innerText = title;
    appointDate();
    getTime();
    editBtn.setAttribute('disabled', true);
    publishBtn.setAttribute('disabled', true);
    editBtn.classList.add('disabled');
    publishBtn.classList.add('disabled');
    dateStr.innerText = 'Projekt utworzony: ' + currentDate;
    timeStr.innerText = currentTime;
    editBtn.innerText = "EDYTUJ";
    publishBtn.innerText = "PUBLIKUJ";
    deleteBtn.innerText = "USUŃ";
    project.appendChild(image);
    menage.appendChild(editBtn);
    menage.appendChild(publishBtn);
    menage.appendChild(deleteBtn);
    project.appendChild(menage);
    project.appendChild(head);
    project.appendChild(dateStr);
    project.appendChild(timeStr);
    projects.insertBefore(project, projects.childNodes[0]);
    document.querySelector('.add-project-modal .title').value = "";
    addProjectModal.className = 'add-project-modal-bg hidden';
    addProCount++;
    addProjectModalInput.disabled = true;
    addProjectModalSubmit.disabled = true;
    document.querySelector('.menage').childNodes[2].addEventListener('click', initDelete);
  }
}

// Add project listeners
document.querySelector('.submit-add').addEventListener('click', function () {
  addProject();
})

document.addEventListener('keydown', function (e) {
  if (addProCount % 2 != 0) {
    if (e.keyCode == 13) {
      addProject();
    };
    if (e.keyCode == 27) {
      modalClose();
    };
  }
})

// Get date
function appointDate() {
  const wholeDate = new Date(),
    day = wholeDate.getUTCDate(),
    month = wholeDate.getMonth() + 1,
    year = wholeDate.getFullYear(),
    dateArr = [day, month, year];
  if (day < 10 || month < 10) {
    for (let i = 0; i < dateArr.length; i++) {
      if (dateArr[i] < 10) {
        dateArr[i] = '0' + dateArr[i];
      }
    }
    currentDate = dateArr[0] + '.' + dateArr[1] + '.' + dateArr[2] + "r.";
  }
  else {
    currentDate = day + "." + month + "." + year + "r.";
  }
}


// Add listeners to "DELETE" buttons in GOTten projects
window.addEventListener('load', () => {
  const deleteButtons = document.querySelectorAll('.project .remove');
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', initDelete);
  };
  if (projects.children[0].classList.contains('project')) {
    adjustAddNewProjectMargin("0px", "80px", "0px", "60px", "0px", "50px");
  }
});
// End add listeners to "DELETE" buttons in GOTten projects

// Delete project
let delProCount = 0;
function initDelete() {
  if (delProCount % 2 == 0) {
    document.querySelector('.delete-project-modal-bg').className = 'delete-project-modal-bg visible';
    if (delProCount % 2 == 0) {
      delProCount++
    }
  }

  const parent = this.parentElement.parentElement;
  document.querySelector('.delete-project-modal .submit-add').addEventListener('click', function () {
    if (parent) {
      parent.remove();
      document.querySelector('.delete-project-modal-bg').className = 'delete-project-modal-bg hidden';
      if (delProCount % 2 != 0) {
        delProCount++
      }
      if (!projects.children[0].classList.contains('project')) {
        addProjectBtn.style.cssText = "margin-top: 80px; margin-bottom: 0;";
      }
    }
  });

  document.querySelector('.delete-project-modal i').addEventListener('click', function () {
    document.querySelector('.delete-project-modal-bg').className = 'delete-project-modal-bg hidden';
    if (delProCount % 2 != 0) {
      delProCount++
    }
    parent = "";
  });

  return;
}

function adjustAddNewProjectMargin(mar1, mar2, mar3, mar4, mar5, mar6) {
  if (screenWidth > 1280) {
    addProjectBtn.style.marginTop = mar1;
    addProjectBtn.style.marginBottom = mar2;
  }
  else if (screenWidth < 1281 && screenWidth > 451) {
    addProjectBtn.style.marginTop = mar3;
    addProjectBtn.style.marginBottom = mar4;
  }
  else {
    addProjectBtn.style.marginTop = mar5;
    addProjectBtn.style.marginBottom = mar6;
  }
}




// End script
