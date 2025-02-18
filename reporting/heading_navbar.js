document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("page-navbar");

    // Select all h1, h2, h3 elements
    var headings = document.querySelectorAll("h1, h2, h3");

    headings.forEach((heading, index) => {
        if (heading.id === "") {
            heading.id = "heading-" + index; // Assign unique ID if it doesn't have one
        }

        var navItem = document.createElement("li");
        var navLink = document.createElement("a");
        navLink.href = "#" + heading.id;
        navLink.textContent = heading.textContent; // Use heading text as the link

        navItem.appendChild(navLink);
        navbar.appendChild(navItem);
    });

    // Smooth scrolling with 120px offset
    document.querySelectorAll("#page-navbar a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offset = 150; // Offset height to prevent navbar overlap
                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Make the secondary navbar sticky
    var pageNavbar = document.getElementById("page-navbar-container");
    pageNavbar.style.position = "fixed";
    pageNavbar.style.top = "60px"; // Adjusted to sit below the main navbar
    pageNavbar.style.zIndex = "999"; // Ensures it stays above other elements
    pageNavbar.style.backgroundColor = "white"; // Keeps it visible against backgrounds
    pageNavbar.style.padding = "10px 0"; // Add padding for spacing
    pageNavbar.style.width = "100%"; // Ensure it spans full width
    pageNavbar.style.borderBottom = "1px solid #ddd"; // Add subtle border for clarity
});
