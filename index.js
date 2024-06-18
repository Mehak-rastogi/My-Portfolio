document.addEventListener("DOMContentLoaded", function () {
  const toggleSidebar = document.getElementById("toggleSidebar");
  const sidebar = document.querySelector(".sidebar");

  toggleSidebar.addEventListener("click", function () {
    console.log("hello");
    sidebar.classList.toggle("hidden");
    sidebar.classList.toggle("right-0");
  });
});
