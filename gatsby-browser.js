
export const onRouteUpdate = () => {
    //document.addEventListener('DOMContentLoaded', function () {
    //console.log("Window Loaded")
    // Get the navbar
    var navBar = document.getElementById("myTopnav");

    var sticky = navBar.offsetTop;
    //console.log("sticky = " + sticky);

    function setStickyNav() {
        // Get the offset position of the navbar again - Solves how PWA reads DOM?
        var navBar = document.getElementById("myTopnav")
        var headerDiv = document.getElementById("myHeader");
        var headerHeight = headerDiv.offsetHeight;

        if (window.pageYOffset >= sticky) {
            navBar.classList.add("sticky-nav");
            headerDiv.style.height = headerHeight + "px";
        } else {
            navBar.classList.remove("sticky-nav");
        }
    }


    ['scroll', 'touchmove'].forEach(function (e) {
        window.addEventListener(e, setStickyNav);
    });

    //})
}


['mouseover', 'mousemove', 'touchmove'].forEach(function (e) {
    window.addEventListener(e, blogListHover);
});

function blogListHover() {

    document.querySelectorAll('#myBlogList li').forEach(e =>
        e.addEventListener('mouseover', () => {
            var precision = 1000; // 3 decimals
            //var spin = Math.floor(Math.random() * (4.00));
            var spin = Math.floor(Math.random() * (3.00 * precision - 1 * precision) + 1 * precision) / (1 * precision);
            spin *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
            e.style.transform = 'rotate(' + spin + 'deg)';
            //console.log("Spin val =" + spin)
            //console.log("Hovering !")
        })
    )

    document.querySelectorAll('#myBlogList li').forEach(e =>
        e.addEventListener('mouseout', () => {
            //console.log("Hovering !")
            e.style.transform = 'rotate(' + 0 + 'deg)';
        })
    )
}




  // function rotateBlogImg() {
  //   var myPost = document.querySelector("#myBlogList li");

    //myPost.addEventListener("mouseover", rotateImgOvr);



    // for (let j = 0; j < myPost.length; j++) {
    //   myPost[j].addEventListener("mouseover", rotateImgOvr)
    // }



  //}


  //window.addEventListener("mouseover", rotateBlogImg);


