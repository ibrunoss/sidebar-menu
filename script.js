const toggleMenu = document.querySelector(".toggle");
const sideBarMenu = document.querySelector(".navigation");

toggleMenu.onclick = () => {
  toggleMenu.classList.toggle("active");
  sideBarMenu.classList.toggle("active");
};

const list = document.querySelectorAll(".list");

list.forEach((menuItem) => {
  menuItem.onclick = () => {
    list.forEach((menuItem) => (menuItem.className = "list"));
    menuItem.className = "list active";
  };
});
