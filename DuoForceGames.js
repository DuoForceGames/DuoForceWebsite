function HomeSwitch(){
  window.location.href = "DuoForceGamesHome.html";
  Page ='Home';
}
function GamesSwitch(){
  window.location.href = "DuoForceGamesGames.html";
  Page ='Games';
}
function OverOnsSwitch(){
  window.location.href = "DuoForceGamesAboutUs.html";
  Page ='AboutUs';
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("menuDiv").style.padding = "30px 0px";
    document.getElementById("image").style.width = '82.5';
    document.getElementById("image").style.top = '10';
    document.getElementById("image").style.height = '44';
    document.getElementById("HB").style.top = '10';
    document.getElementById("GB").style.top = "10";
    document.getElementById("OB").style.top = "10";

  } else {
    document.getElementById("menuDiv").style.padding = "60px 0px";
    document.getElementById("image").style.width = '165';
    document.getElementById("image").style.top = '14';
    document.getElementById("image").style.height ='88';
    document.getElementById("HB").style.top = '40';
    document.getElementById("GB").style.top = "40";
    document.getElementById("OB").style.top = "40";
  }
  
}