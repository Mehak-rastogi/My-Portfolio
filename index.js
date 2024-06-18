document.addEventListener("DOMContentLoaded", function () {
  const toggleSidebar = document.getElementById("toggleSidebar");
  const sidebar = document.querySelector(".sidebar");

  toggleSidebar.addEventListener("click", function () {
    sidebar.classList.remove("invisible");
    sidebar.classList.toggle("hidden");
    sidebar.classList.toggle("right-0.5");
    const list = document.querySelectorAll("li");
    list.forEach((li) => {
      li.addEventListener("click", function () {
        sidebar.classList.add("invisible");
      });
    });
  });
});
