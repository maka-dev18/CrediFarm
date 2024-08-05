function togglePasswordVisibility() {
  var passwordInput = document.getElementById('password');
  var passwordType = passwordInput.getAttribute('type');
  if (passwordType === 'password') {
    passwordInput.setAttribute('type', 'text');
  } else {
    passwordInput.setAttribute('type', 'password');
  }
}
