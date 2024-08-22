function openTab(evt, tabName) {

  var tabContent = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }


  var tabs = document.getElementsByClassName("tab");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }


  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}


document.getElementById("greenhouses").style.display = "block";
document.querySelector(".tab").classList.add("active");
