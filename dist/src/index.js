/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
var modalContainer = document.getElementById('modalContainer');
var form = document.getElementById('form');
var signUp = document.getElementById('signup');
var start = document.getElementById('start');
var close = document.getElementById('close');
var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');
var formValues = {};

if (!localStorage.getItem('registeredUser')) {
  signUp.addEventListener('click', function () {
    modalContainer.classList.add('showModal');
  });
  close.addEventListener('click', function () {
    modalContainer.classList.remove('showModal');
  });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    formValues = {
      'username': username.value,
      'email': email.value,
      'password': password.value
    };
    localStorage.setItem('registeredUser', JSON.stringify(formValues));
    signUp.style.display = 'none';
    start.style.display = 'block';
    modalContainer.classList.remove('showModal');
  });
}

if (localStorage.getItem('registeredUser')) {
  signUp.style.display = 'none';
  start.style.display = 'block';
}
/******/ })()
;