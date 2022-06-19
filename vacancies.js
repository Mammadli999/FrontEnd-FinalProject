//#region Sticky NavBar
const header = document.querySelector(".header");
const white_img = document.querySelector("#white_img");
const blue_img = document.querySelector("#blue_img");

let sticky = header.offsetTop;
white_img.style.display = "none";
window.addEventListener("scroll", () => {
  if (window.pageYOffset - 135 > sticky) {
      header.classList.add("sticky");
      
    blue_img.style.display = "block";
    white_img.style.display = "none";
    header.classList.add("onscroll");
  } else {
      header.classList.remove("sticky");
  }
});
//#endregion
