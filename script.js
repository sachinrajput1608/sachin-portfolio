document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    
    window.addEventListener("scroll", () => {
        let scrollY = window.pageYOffset;

        sections.forEach((section) => {
            if (section.offsetTop - 50 <= scrollY && section.offsetTop + section.offsetHeight > scrollY) {
                document.querySelector("nav ul li a[href*=" + section.id + "]").classList.add("active");
            } else {
                document.querySelector("nav ul li a[href*=" + section.id + "]").classList.remove("active");
            }
        });
    });
});
