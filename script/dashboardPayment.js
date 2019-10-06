const paymentMethodModal = document.querySelector('.paymentMethodModal');
const paymentMethodModalClose = document.querySelector('.paymentMethodModal i');
const packageChooseModal = document.querySelector('.packageChooseModal');
const packageChooseModalClose = document.querySelector('.packageChooseModal i');
const extendPackage = document.querySelector('.extendPackage .packageBtn');
const changePackage = document.querySelector('.changePackage .packageBtn');
const paymentMethodEl = document.querySelectorAll('.paymentMethod div');
const paymentMethodLi = [paymentMethodEl[1], paymentMethodEl[2], paymentMethodEl[3]]

// Open and close PAYMENT METHOD SELECTION on dashboard extendPackage btn
extendPackage.addEventListener('click', function () {
  paymentMethodModal.className = 'paymentMethodBg visible';
});

paymentMethodModalClose.addEventListener('click', function () {
  paymentMethodModal.className = 'paymentMethodModal paymentMethodBg hidden';
})
// End

// Open and close PACKAGE SELECTION on dashboard changePackage btn
changePackage.addEventListener('click', function () {
  packageChooseModal.className = 'packageChooseModal paymentMethodBg packageChoose visible';
});

packageChooseModalClose.addEventListener('click', function () {
  packageChooseModal.className = 'packageChooseModal paymentMethodBg packageChoose hidden';
})
// End

// Open PAYMENT METHOD after the package has been selected
for (let i = 0; i < paymentMethodLi.length; i++) {
  paymentMethodLi[i].addEventListener('click', function () {
    packageChooseModal.className = 'packageChooseModal paymentMethodBg packageChoose hidden';
    paymentMethodModal.className = 'paymentMethodBg visible';
  });
}
// End
