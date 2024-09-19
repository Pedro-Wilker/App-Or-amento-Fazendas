document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.querySelector('form');

  loginForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const email = document.querySelector('input[name="email"]').value;
      const password = document.querySelector('input[name="password"]').value;

      if (validateLogin(email, password)) {
          alert('Login bem-sucedido!');
          window.location.href = '../home.html'; 
      } else {
          alert('Email ou senha inválidos!');
      }
  });

document.getElementById('cadastro-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;
    const sobrenome = document.getElementById('sobrenome').value;

    registerUser(email, password, name, sobrenome);
});

  function validateLogin(email, password) {
      const storedEmail = localStorage.getItem('userEmail');
      const storedPassword = localStorage.getItem('userPassword');

      return email === storedEmail && password === storedPassword;
  }

  function registerUser(email, password, name, sobrenome) {
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    localStorage.setItem('userName', name);
    localStorage.setItem('userSobrenome', sobrenome);
}

});
