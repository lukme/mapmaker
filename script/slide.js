const what = document.querySelector('.what_is-container'),
  offer = document.querySelector('.offer-container'),
  contact = document.querySelector('.contact-container'),
  about = document.querySelector('.about-container'),
  whatImg = document.querySelector('.what_is-container img'),
  contactImg = document.querySelector('.contact-container img'),
  aboutImg = document.querySelector('.about-container img'),
  whatH = document.querySelector('.what_is-container h1'),
  contactH = document.querySelector('.contact-container h1'),
  aboutH = document.querySelector('.about-container h1'),
  offerStand = document.querySelector('.standard'),
  offerPrem = document.querySelector('.premium'),
  offerPro = document.querySelector('.pro');

// Adjust to screen width
let whatVal = 0,
  offerVal = 0,
  contactVal = 0,
  aboutVal = 0,
  footerVal = 0;

if (screenWidth > 1600) {
  whatVal = 500;
    offerVal = 1650;
    contactVal = 2600;
    aboutVal = 3350;
    footerVal = 3900;
} else if (screenWidth < 1600) {
  if (screenWidth < 460) {
    whatVal = 190;
      offerVal = 950;
      contactVal = 1650;
      aboutVal = 2300;
      footerVal = 2950;
  } else if (screenWidth > 450 && screenWidth < 1201 && screenHeight > 450) {
    whatVal = 400;
      offerVal = 1250;
      contactVal = 1900;
      aboutVal = 2700;
      footerVal = 3400;
  } else if (screenWidth < 700 && screenHeight < 451) {
    whatVal = 110;
      offerVal = 450;
      contactVal = 780;
      aboutVal = 1430;
      footerVal = 1760;
  } else if (screenWidth < 700 && screenHeight > 451) {
    whatVal = 110;
      offerVal = 300;
      contactVal = 780;
      aboutVal = 1430;
      footerVal = 1760;
  } else {
    whatVal = 0;
      offerVal = 0;
      contactVal = 0;
      aboutVal = 0;
      footerVal = 0;
  }
} else {
  whatVal = 400;
    offerVal = 920;
    contactVal = 1650;
    aboutVal = 2300;
    footerVal = 2950;
}

document.addEventListener('scroll', showCont);
window.addEventListener('load', showCont);

function showCont() {
  if (document.documentElement.scrollTop >= whatVal || document.body.scrollTop >= whatVal) {
    what.className = 'what_is-container opacityOne';
    whatImg.className = 'shownRight';
    whatH.className = 'slideLeftDelay';
  }
  else {
    what.className = 'what_is-container opacityZero';
    whatImg.className = 'hiddenRight';
    whatH.className = 'hiddenLeft';
  };

  if (document.documentElement.scrollTop >= offerVal || document.body.scrollTop >= offerVal) {
    offer.className = 'offer-container opacityOne';
    offerStand.classList.add('standard-active');
    offerPrem.classList.add('premium-active');
    offerPro.classList.add('pro-active');
  }
  else {
    offer.className = 'offer-container opacityZero';
    offerStand.classList.remove('standard-active');
    offerPrem.classList.remove('premium-active');
    offerPro.classList.remove('pro-active');
  };

  if (document.documentElement.scrollTop >= contactVal || document.body.scrollTop >= contactVal) {
    contact.className = 'contact-container opacityOne';
    contactImg.className = 'shownLeft';
  }
  else {
    contact.className = 'contact-container opacityZero';
    contactImg.className = 'hiddenLeft';
  };

  if (document.documentElement.scrollTop >= aboutVal || document.body.scrollTop >= aboutVal) {
    about.className = 'about-container opacityOne';
    aboutImg.className = 'shownBottom';
  }
  else {
    about.className = 'about-container opacityZero';
    aboutImg.className = 'hiddenBottom';
  };

  if (document.documentElement.scrollTop >= footerVal || document.body.scrollTop >= footerVal) {
    footer.className = 'footer-content opacityOne';
  }
  else {
    footer.className = 'footer-content opacityZero';
  }
};
