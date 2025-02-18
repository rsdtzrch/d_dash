document.addEventListener("DOMContentLoaded", function() {
    fetch("navbar.html")  // Adjust path if needed
        .then(response => response.text())
        .then(html => {
            document.getElementById("navbar-container").innerHTML = html;
            attachMenuClickEvents(); // Ensure submenu events are attached after load
        });
});

function attachMenuClickEvents() {
    document.getElementById("navbar-container").addEventListener("click", function(event) {
        let target = event.target.closest(".menu-item > a");
        if (!target) return;

        let submenu = target.nextElementSibling;
        if (submenu && submenu.classList.contains("submenu")) {
            event.preventDefault(); // Prevent default only for submenu items
            
            // Close all other submenus
            document.querySelectorAll(".submenu").forEach(menu => {
                if (menu !== submenu) {
                    menu.style.display = "none";
                }
            });
            
            // Toggle the clicked submenu
            submenu.style.display = (submenu.style.display === "block" ? "none" : "block");
        } else {
            // Allow normal navigation for non-submenu items
            window.location.href = target.href;
        }
    });
}
