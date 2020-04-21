// Get the navbar
const navBar = document.getElementById("myTopnav");

// Get the offset position of the navbar
const sticky = navBar.offsetTop;

// Set he header height
const headerDiv = document.getElementById("myHeader");
const headerHeight = headerDiv.offsetHeight;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function setStickyNav() {

  // Get the offset position of the navbar again - Solves how PWA reads DOM?
  const navBar = document.getElementById("myTopnav")
  const headerDiv = document.getElementById("myHeader");
  const headerHeight = headerDiv.offsetHeight;

  if (window.pageYOffset >= sticky) {
    navBar.classList.add("sticky-nav");
    headerDiv.style.height = headerHeight + "px";
  } else {
    navBar.classList.remove("sticky-nav");
  }
}

// When the user scrolls the page, execute myFunction
//window.addEventListener("scroll", setStickyNav);

['scroll', 'touchmove'].forEach(function (e) {
  window.addEventListener(e, setStickyNav);
});


['mouseover', 'mousemove', 'touchmove'].forEach(function (e) {
  window.addEventListener(e, blogListHover);
});

// document.addEventListener('load', blogListHover);
function blogListHover() {

  document.querySelectorAll('#myBlogList li').forEach(e =>
    e.addEventListener('mouseover', () => {
      var precision = 1000; // 3 decimals
      //var spin = Math.floor(Math.random() * (4.00));
      var spin = Math.floor(Math.random() * (4.00 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      spin *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
      e.style.transform = 'rotate(' + spin + 'deg)';
      //console.log("Spin val =" + spin)
      //console.log("Hovering !")
    }))

  document.querySelectorAll('#myBlogList li').forEach(e =>
    e.addEventListener('mouseout', () => {
      //console.log("Hovering !")
      e.style.transform = 'rotate(' + 0 + 'deg)';
    }))

}




// function rotateBlogImg() {
//   var myPost = document.querySelector("#myBlogList li");

  //myPost.addEventListener("mouseover", rotateImgOvr);



  // for (let j = 0; j < myPost.length; j++) {
  //   myPost[j].addEventListener("mouseover", rotateImgOvr)
  // }



//}


//window.addEventListener("mouseover", rotateBlogImg);


