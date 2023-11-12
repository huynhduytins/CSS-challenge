const menuIcon = document.querySelector(".menu-icon");
const children = [...menuIcon.children];

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  children.forEach((child) => {
    child.classList.remove("no-animation");
  });
});
