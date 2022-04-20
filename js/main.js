let modalContainer = document.getElementById('modalContainer');
let form = document.getElementById('form');
let signUp = document.getElementById('signup');
let start = document.getElementById('start');
let close = document.getElementById('close');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let formValues = {};


if (! localStorage.getItem('registeredUser')) {
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
      }

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