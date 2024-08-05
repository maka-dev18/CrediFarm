document.getElementById('resetPasswordForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  if (validateEmail(email)) {
    alert('Request sent! Please check your email for further instructions.');
    // Here you can add the logic to handle the OTP request
  } else {
    alert('Please enter a valid email address.');
  }
});

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(email);
}
