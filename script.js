var navItems = document.querySelectorAll(".header-nav-area .header-nav-menu-area ul>li a");
var windowPath = window.location.pathname;

navItems.forEach(function(navI) {
  if (navI.href.includes(windowPath)) {
    navI.style.color = "#ffc600"; 
  }
});


  window.addEventListener("scroll",function(){
    var header = document.querySelector(".header-nav-area");
    header.classList.toggle("fixed-header",window.scrollY>250);
  });

  var filter = document.querySelector(".filters ul");
  var singlecontent1 = document.querySelector(".single-content:nth-child(1)");
  var singlecontent2 = document.querySelector(".single-content:nth-child(2)");
  var singlecontent3 = document.querySelector(".single-content:nth-child(3)");
  var singlecontent4 = document.querySelector(".single-content:nth-child(4)");
  var singlecontent5 = document.querySelector(".single-content:nth-child(5)");
  var singlecontent6 = document.querySelector(".single-content:nth-child(6)");

  filter.addEventListener("click", function(e) {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
  
    var filterText = e.target.textContent;
  
    if (filterText === "All") {
      singlecontent1.style.opacity = "1";
      singlecontent1.style.transform = "scale(1)";
      singlecontent2.style.opacity = "1";
      singlecontent2.style.transform = "scale(1)";
      singlecontent3.style.opacity = "1";
      singlecontent3.style.transform = "scale(1)";
      singlecontent4.style.opacity = "1";
      singlecontent4.style.transform = "scale(1)";
      singlecontent5.style.opacity = "1";
      singlecontent5.style.transform = "scale(1)";
      singlecontent6.style.opacity = "1";
      singlecontent6.style.transform = "scale(1)";
    } else if (filterText === "Web Design") {
      singlecontent1.style.opacity = "1";
      singlecontent1.style.transform = "scale(1)";
      singlecontent2.style.opacity = "1";
      singlecontent2.style.transform = "scale(1)";
      singlecontent4.style.opacity = "1";
      singlecontent4.style.transform = "scale(1)";
      singlecontent5.style.opacity = "1";
      singlecontent5.style.transform = "scale(1)";
      singlecontent6.style.opacity = "1";
      singlecontent6.style.transform = "scale(1)";
      singlecontent3.style.opacity = "0";
      singlecontent3.style.transform = "scale(0)";
      singlecontent4.style.transform = "scale(1) translate(725px, -250px)";
      singlecontent5.style.transform = "scale(1) translateX(-365px)";
      singlecontent6.style.transform = "scale(1) translateX(-365px)";
    } else if (filterText === "Web Development") {
      singlecontent1.style.opacity = "1";
      singlecontent1.style.transform = "scale(1)";
      singlecontent2.style.opacity = "0";
      singlecontent2.style.transform = "scale(0)";
      singlecontent3.style.opacity = "0";
      singlecontent3.style.transform = "scale(0)";
      singlecontent4.style.opacity = "0";
      singlecontent4.style.transform = "scale(0)";
      singlecontent5.style.opacity = "0";
      singlecontent5.style.transform = "scale(0)";
      singlecontent6.style.opacity = "0";
      singlecontent6.style.transform = "scale(0)";
    } else if (filterText === "Brand Identity") {
      singlecontent1.style.opacity = "0";
      singlecontent1.style.transform = "scale(0)";
      singlecontent2.style.opacity = "1";
      singlecontent2.style.transform = "scale(1)";
      singlecontent2.style.transform = "scale(1) translateX(-365px)";
      singlecontent3.style.opacity = "1";
      singlecontent3.style.transform = "scale(1) translateX(-365px)";
      singlecontent6.style.opacity = "1";
      singlecontent6.style.transform = "scale(1) translateY(-250px)";
      singlecontent4.style.opacity = "0";
      singlecontent4.style.transform = "scale(0)";
      singlecontent5.style.opacity = "0";
      singlecontent5.style.transform = "scale(0)";
    }
  });

