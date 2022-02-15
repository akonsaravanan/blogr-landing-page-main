const main_links = document.querySelectorAll(".main-link");

main_links.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    main_links.forEach(function (links) {
      links.classList.remove("open-menu");
      links.classList.remove("rotate");
    });

    link.classList.toggle("open-menu");
    link.classList.toggle("rotate");
  });
});
