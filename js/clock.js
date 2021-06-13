setInterval(() => {
    var d = new Date("Jan 5, 2022 15:37:25").getTime();
    var d2 = new Date().getTime();
    document.getElementById('day').innerHTML = Math.floor((d - d2) / 86400000) 
    document.getElementById('hour').innerHTML = " : " + Math.floor(((d - d2) / 3600000) % 24);
    document.getElementById('min').innerHTML =" : " +  Math.floor(((d - d2) / 60000) % 60);
    document.getElementById('sec').innerHTML =" : " +  Math.floor(((d - d2) / 1000) % 60);
}, 100);

window.onscroll = function () { myFunction() };

function myFunction() {
  if ( document.body.scrollTop > 30 ||document.documentElement.scrollTop > 50) {
    document.getElementsByClassName("navbar")[0].classList.add("mydiv");
  } else {
    document.getElementsByClassName("navbar")[0].classList.remove("mydiv");

  }
}