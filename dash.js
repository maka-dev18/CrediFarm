document.getElementById('toggle-btn').addEventListener('click', function () {
  document.querySelector('.sidebar').classList.toggle('collapsed');
  this.querySelector('i').classList.toggle('bi-chevron-left');
  this.querySelector('i').classList.toggle('bi-chevron-right');
});

document.querySelectorAll('.dropdown-btn').forEach(button => {
  button.addEventListener('click', function () {
    this.classList.toggle('active');
    const dropdownContent = this.nextElementSibling;
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
  });
});
