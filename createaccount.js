document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".signup-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Form submitted!");
  });
});


