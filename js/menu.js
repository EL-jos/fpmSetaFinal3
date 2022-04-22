var nav = document.querySelector("nav");
var menu = document.querySelector(".el-navigation-niveau-1");

const posYNav = nav.offsetTop;
//console.log(posYNav);

window.addEventListener("scroll", (e) => {
    if(window.scrollY > posYNav - 10){
        nav.classList.add("sticky");
    }else{
        nav.classList.remove("sticky");
    }
});