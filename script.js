const list = document.querySelectorAll(".list");

list.forEach((menuItem) => {
  menuItem.onclick = () => {
    list.forEach((menuItem) => (menuItem.className = "list"));
    menuItem.className = "list active";
  };
});
