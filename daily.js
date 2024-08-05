
function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => {
    tab.classList.remove('active');
  });
  document.getElementById(tabId).classList.add('active');

  const tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(button => {
    button.classList.remove('active');
  });
  document.querySelector(`.tab-button[onclick="showTab('${tabId}')"]`).classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  showTab('fertilizers');
});
