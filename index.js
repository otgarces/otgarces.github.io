// Hovering effects
document.addEventListener("DOMContentLoaded", function() {
    const options = document.querySelectorAll(".panel a");

    options.forEach(option => {
        option.addEventListener("mouseenter", () => {
            options.forEach(otherOption => {
                if (otherOption !== option) {
                    otherOption.style.opacity = "0.5";
                }
            });
        });

        option.addEventListener("mouseleave", () => {
            options.forEach(otherOption => {
                otherOption.style.opacity = "1";
            });
        });
    });
});
