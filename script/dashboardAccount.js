const changeUsernameBtn = document.querySelector('.account .changeData button'),
  changePasswordBtn = document.querySelector('.account .changePassword button'),
  dashInformerLogin = document.querySelector('.dashInformerLogin'),
  dashInformerPassword = document.querySelector('.changePassword .dashInformerPassword'),
  deleteAccountBtn = document.querySelector('.delete-account-link'),
  deleteAccountNo = document.querySelector('.noDelete'),
  deleteAccountYes = document.querySelector('.yesDelete'),
  deleteAccountInformer = document.querySelector('.personalData .delete-account-informer'),
  deleteAccountWrongMailInformer = document.querySelector('.personalData .wrong-mail'),
  recall1 = document.querySelector('.user-data').children[0],
  recall2 = document.querySelector('.personalData').children[1].children[0].children[0].children[1],
  userRecall = [recall1, recall2];
let username = "Użytkownik";

// Set username onload
for (let i = 0; i < userRecall.length; i++) {
  userRecall[i].innerText = username;
}

// Make the informers show on wrong login/password
changeUsernameBtn.addEventListener('click', function (e) {
  const loginInputValue = document.querySelector('.account .changeData input');
  if (loginInputValue.value) {
    console.log("You may pass");

    // Change the username
    (function() {
      username = e.target.parentNode.children[1].value;
      for (let i = 0; i < userRecall.length; i++) {
        userRecall[i].innerText = username;
      }
    })();

  }
  else {
    dashInformerLogin.classList = 'dashInformerLogin visible';
    setTimeout(function () {
      dashInformerLogin.classList = 'dashInformerLogin hidden';
    }, 1200);
  }
  loginInputValue.value = "";
  return;
})

changePasswordBtn.addEventListener('click', function () {
  const passwordInputValue = document.querySelectorAll('.account .changePassword input');
  if (passwordInputValue[0].value !== "" && passwordInputValue[1].value !== "" && passwordInputValue[2] !== "") {
    if (passwordInputValue[1].value !== passwordInputValue[2].value || passwordInputValue[0].value === passwordInputValue[1].value) {
      dashInformUserPassword();
      passwordInputValue[0].value = "";
      passwordInputValue[1].value = "";
      passwordInputValue[2].value = "";
      return;
    }
    console.log("You may pass :)");
  }
  else {
    console.log("You shall not pass!");
    dashInformUserPassword();
    passwordInputValue[0].value = "";
    passwordInputValue[1].value = "";
    passwordInputValue[2].value = "";
    return;
  }
  passwordInputValue[0].value = "";
  passwordInputValue[1].value = "";
  passwordInputValue[2].value = "";
})

function dashInformUserPassword() {
  dashInformerPassword.classList = 'dashInformerPassword visible';
  setTimeout(function () {
    dashInformerPassword.classList = 'dashInformerPassword hidden';
  }, 1200);
}

deleteAccountBtn.addEventListener('click', dashInformUserDeleteShow);
deleteAccountNo.addEventListener('click', dashInformUserDeleteShow);
deleteAccountYes.addEventListener('click', () => {
  const dashDataPassword = document.querySelector('.personalData').children[1].children[0].children[1].children[1].innerText,
    deleteAskForMailPassword = document.querySelector('.askForMail').value;
  if (dashDataPassword === deleteAskForMailPassword) {
    alert("Usunięto");
    deleteAccountInformer.className = "dashInformerLogin delete-account-informer hidden";
    deleteAccountInformerCount++;
  }
  else {
    deleteAccountWrongMailInformer.classList = 'dashInformerLogin deleteAccountWrongMailInformer visible';
    setTimeout(function () {
      deleteAccountWrongMailInformer.classList = 'dashInformerLogin deleteAccountWrongMailInformer hidden';
    }, 1200);
  }
});
deleteAccountInformerCount = 0;

function dashInformUserDeleteShow() {
  if (deleteAccountInformerCount % 2 == 0) {
    deleteAccountInformer.className = "dashInformerLogin delete-account-informer visible";
    deleteAccountInformerCount++
  }
  else {
    deleteAccountInformer.className = "dashInformerLogin delete-account-informer hidden";
    deleteAccountInformerCount++
  }
}





// End script
