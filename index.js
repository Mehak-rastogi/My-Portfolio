// document.addEventListener("DOMContentLoaded", function () {
//   var typed = new Typed(".text", {
//     strings: ["Frontend Developer", "Web Developer"],
//     typeSpeed: 200,
//     backSpeed: 200,
//     backDelay: 1000,
//     loop: true,
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  const toggleSidebar = document.getElementById("toggleSidebar");
  const sidebar = document.querySelector(".sidebar");

  toggleSidebar.addEventListener("click", function () {
    sidebar.classList.remove("sm:invisible");
    sidebar.classList.toggle("sm:hidden");
    sidebar.classList.toggle("sm:right-0.5");
    const list = document.querySelectorAll("li");
    list.forEach((li) => {
      li.addEventListener("click", function () {
        sidebar.classList.add("sm:invisible");
      });
    });
  });
});
