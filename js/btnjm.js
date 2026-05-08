const btnScrollToTop = document.getElementById("click");

btnScrollToTop.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })


})