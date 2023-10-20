// toogle clas active

const navbarNav = document.querySelector(".navbar-nav");
const theme = document.getElementById("theme");
const link = document.querySelector("link");

// switchTheme
theme.addEventListener("change", function handleChange(event) {
  console.log(event.target.value); // 👉️ get selected VALUE

  if (event.target.value == "light") {
    link.setAttribute("href", "css/style" + ".css");
  } else {
    link.setAttribute("href", "css/style-dark" + ".css");
  }
});

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
