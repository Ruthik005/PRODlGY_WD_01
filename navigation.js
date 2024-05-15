document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    const links = document.querySelectorAll(".link");
    const contents = document.querySelectorAll(".content");
    
    menuToggle.addEventListener("click", toggleMobileMenu);
    links.forEach(link => link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("data-target");
        activateContent(targetId);
    }));

    function toggleMobileMenu() {
        menuToggle.classList.toggle("active");
        menu.classList.toggle("active");
    }

    function activateContent(targetId) {
        contents.forEach(content => {
            if (content.id === targetId) {
                content.classList.add("active");
            } else {
                content.classList.remove("active");
            }
        });
    }
});