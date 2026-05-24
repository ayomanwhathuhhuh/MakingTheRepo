const navbar = document.getElementById("Nav");
function NavEnter() {
  console.log("Hovering over navbar.", navbar.className);
}
function NavLeave() {
  console.log("No longer hovering over navbar.", navbar.className);
}
