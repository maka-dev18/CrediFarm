function showTab(tabName) {

  var tabs = document.getElementsByClassName('tab-content');
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = 'none';
    tabs[i].classList.remove('active');
  }


  var tabButtons = document.getElementsByClassName('tab-button');
  for (var i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove('active');
  }


  document.getElementById(tabName).style.display = 'block';
  document.getElementById(tabName).classList.add('active');
  event.currentTarget.classList.add('active');
}


document.getElementsByClassName('tab-button')[0].click();
