const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  modeToggle = document.querySelector(".dark-light"),
  searchToggle = document.querySelector(".searchToggle"),
  sidebaropen = document.querySelector(".sidebaropen"),
  sidebarclose = document.querySelector(".sidebarclose");

  let getMode=localStorage.getItem("mode");
  if(getMode && getMode === "dark-mode"){
    body.classList.add("dark");
  }
//js code to toggle dark and light mode
modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  body.classList.toggle("dark");

  if(!body.classList.contains("dark")){
    localStorage.setItem("mode","light-mode");
  }else{
    localStorage.setItem("mode", "dark-mode"); 
  }
});

//js code to toggle search box
searchToggle.addEventListener("click", () => {
  searchToggle.classList.toggle("active");
});

//js code to toggle sidebar
sidebaropen.addEventListener("click", () => {
  nav.classList.add("active");
});

body.addEventListener("click", e => {
  let clickedElm = e.target;

  if (!clickedElm.classList.contains("sidebaropen") && !clickedElm.classList.contains("menu")) {
    nav.classList.remove("active");
  }
});
