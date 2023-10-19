const html = document.querySelector("html");

$(window).on("load", function () {});

// toogle clas active

const navbarNav = document.querySelector(".navbar-nav");
const link = document.querySelector(".link");
const darkmode = document.querySelector(".ganti");

darkmode.addEventListener("click", function () {});

// hamburger active
document
  .querySelector("#hamburger-menu")
  .addEventListener("click", function () {
    navbarNav.classList.toggle("active");
  });

const resume = document.getElementById("resume");

resume.addEventListener("click", function () {
  alert("Resume berhasil didownload");
});
