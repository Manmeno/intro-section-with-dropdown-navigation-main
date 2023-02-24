let arrowDown = document.querySelector(".arrowDown");
let arrowUp = document.querySelector(".arrowUp");
let arrowDown2 = document.querySelector(".arrowDown2");
let arrowUp2 = document.querySelector(".arrowUp2");
let iconMenu = document.getElementById("iconMenu");
let dropdwoninf1 = document.getElementById("dropdwoninf1");
let dropdwoninf2 = document.getElementById("dropdwoninf2");
let dropdwoninf3 = document.getElementById("dropdwoninf3");
let iconTodo = document.getElementById("iconTodo");
let iconCalendar = document.getElementById("iconCalendar");
let iconReminders = document.getElementById("iconReminders");
let iconPlanning = document.getElementById("iconPlanning");
let navlogo = document.querySelector(".logo");
let iconClose = document.querySelector(".close-icon");
let navContanier = document.getElementById("nav-Contanier");
let navlinks = document.querySelector(".nav-links");
let icon = document.getElementById("icon");
let arrow10 = document.querySelector(".arrow10");
let arrow11 = document.querySelector(".arrow11");
let dropdown12 = document.querySelector(".dropdown12");
let dropdown21 = document.querySelector(".dropdown21");
let arrowDown11 = document.querySelector(".arrowDown11");
let arrowUp12 = document.querySelector(".arrowUp12");
let dropdwoninf11 = document.getElementById("dropdwoninf11");
let dropdwoninf12 = document.getElementById("dropdwoninf12");
let dropdwoninf13 = document.getElementById("dropdwoninf13");
function show() {
  iconTodo.style.display = "block"
  iconCalendar.style.display = "block"
  iconReminders.style.display = "block"
  iconPlanning.style.display = "block"
  arrowUp.style.display = "inline"
  arrowDown.style.display = "none"
}
function hide() {
  iconTodo.style.display = "none"
  iconCalendar.style.display = "none"
  iconReminders.style.display = "none"
  iconPlanning.style.display = "none"
  arrowUp.style.display = "none"
  arrowDown.style.display = "inline"
}
function showinf() {
  dropdwoninf1.style.display = "block"
  dropdwoninf2.style.display = "block"
  dropdwoninf3.style.display = "block"
  arrowUp2.style.display = "inline"
  arrowDown2.style.display = "none"
}
function hideinf() {
  dropdwoninf1.style.display = "none"
  dropdwoninf2.style.display = "none"
  dropdwoninf3.style.display = "none"
  arrowUp2.style.display = "none"
  arrowDown2.style.display = "inline"
}
function showdata() {
  navlogo.style.display = "none"
  iconClose.style.display = "block"
  navContanier.style.display = "inline"
  navlinks.style.display = "block"
}
function hidedata() {
  navlogo.style.display = "block"
  iconClose.style.display = "none"
  navContanier.style.display = "none"
  navlinks.style.display = "none"
}
function showicon() {
  dropdown12.style.display = "block"
  arrow11.style.display = "flex"
  arrow10.style.display = "none"
}
function hideicon() {
  dropdown12.style.display = "none"
  arrow10.style.display = "flex"
  arrow11.style.display = "none"
}
function showp() {
  dropdown21.style.display = "block"
  arrowDown11.style.display = "none"
  arrowUp12.style.display = "flex"
  dropdwoninf11.style.display = "block"
  dropdwoninf12.style.display = "block"
  dropdwoninf13.style.display = "block"
}
function hidep() {
  dropdwoninf11.style.display = "none"
  dropdwoninf12.style.display = "none"
  dropdwoninf13.style.display = "none"
  dropdown21.style.display = "none"
  arrowUp12.style.display = "none"
  arrowDown11.style.display = "flex"
}