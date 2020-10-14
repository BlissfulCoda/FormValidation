(function() {
  //UI Variables
  const form = document.getElementById('form');
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const password2 = document.getElementById('password2');

  //load All Events
  loadAllEventListeners();

  function loadAllEventListeners() {
    form.addEventListener('submit', sendForm);
  }

  //ShowError 
  function showError(username, msg){
      const formControl = username.parentElement;
  }

  function sendForm(e) {
    if (username.value === '') {
      showError(username, 'Please enter a username');
    } else {
        showSuccess(username)
    }



    e.preventDefault();
  }
})();
