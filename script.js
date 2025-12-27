const logo = document.getElementById("logoToggle");
const sidebar = document.getElementById("sidebar");

logo.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

  const userIcon = document.getElementById("userIcon");
  const profileMenu = document.getElementById("profileMenu");

  userIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    profileMenu.classList.toggle("active");
  });

  document.addEventListener("click", () => {
    profileMenu.classList.remove("active");
  });