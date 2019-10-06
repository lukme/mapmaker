const handle = document.querySelector('.handle'),
  handleImg = document.querySelector('.handle i'),
  chatPanel = document.querySelector('.chat-container'),
  chatContent = document.querySelector('.chat-content'),
  chatConstant = document.querySelector('.constant'),
  chatSendBtn = document.querySelector('.send-button'),
  hiddenFasMobile = document.querySelector('.chat-header i');

handle.addEventListener('click', initChat);
hiddenFasMobile.addEventListener('click', initChat);

let chatCount = 0;
function initChat() {
  if (chatCount % 2 == 0) {
    chatPanel.className = 'chat-container chatShow';
    if (screenWidth > 1200) {
      handleImg.className = 'fas fa-times';
    }
    chatCount++
  }
  else if (chatCount % 2 != 0) {
    chatPanel.className = 'chat-container chatHide';
    handleImg.className = 'fas fa-comments';
    chatCount++
  }
  setTimeout(function () {
    chatConstant.classList.add('chatShow');
  }, 500);
}

chatSendBtn.addEventListener('click', function () {
  const message = document.querySelector('.chat-footer input').value;
  sendMessage(message);
});
document.addEventListener('keydown', function (e) {
  if (chatCount % 2 != 0) {
    if (e.keyCode == 13) {
      const message = document.querySelector('.chat-footer input').value;
      sendMessage(message);
    }
    else if (e.keyCode == 27) {
      chatPanel.className = 'chat-container chatHide';
      handleImg.className = 'fas fa-comments';
      chatCount++
    }
    else { return };
  }
  else { return };
})

let currentTime = "";
function sendMessage(text) {
  if (text == false) { return; }
  else {
    getTime();
    const userDiv = document.createElement('div'),
      userImg = document.createElement('i'),
      userPDiv = document.createElement('div'),
      userP = document.createElement('p'),
      userPTime = document.createElement('p');
    userDiv.classList.add('user');
    userImg.className = 'fas fa-user-circle';
    userPDiv.className = 'user-mes message chatShow';
    userPTime.classList.add('time');
    userP.innerText = text;
    userPTime.innerText = currentTime;
    userPDiv.appendChild(userP);
    userPDiv.appendChild(userPTime);
    userDiv.appendChild(userImg);
    userDiv.appendChild(userPDiv);
    chatContent.appendChild(userDiv);
    document.querySelector('.chat-footer input').value = '';
    chatContent.scrollTop = chatContent.scrollHeight;
  }
}

// Get time
function getTime() {
  const wholeDateTime = new Date(),
    hours = wholeDateTime.getHours(),
    minutes = wholeDateTime.getMinutes(),
    seconds = wholeDateTime.getSeconds(),
    timeArr = [hours, minutes, seconds];
  if (hours < 10 || minutes < 10 || seconds < 10) {
    for (let i = 0; i < timeArr.length; i++) {
      if (timeArr[i] < 10) {
        timeArr[i] = '0' + timeArr[i];
      }
    }
    currentTime = timeArr[0] + ':' + timeArr[1] + ':' + timeArr[2];
  }
  else {
    currentTime = hours + ':' + minutes + ':' + seconds;
  }
};
// End get time

// Show the X in the chat-header when displayed on mobile
if (screenWidth > 450) {
  hiddenFasMobile.style.display = 'none';
} else {
  hiddenFasMobile.style.display = 'block';
}
