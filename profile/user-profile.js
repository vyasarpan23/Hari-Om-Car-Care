document.addEventListener("DOMContentLoaded", function () {
    // Logout button functionality
    const logoutBtn = document.getElementById("logoutBtn");
    const sidebarLogoutBtn = document.getElementById("sidebarLogoutBtn");

    if (logoutBtn && sidebarLogoutBtn) {
        const logoutFunction = function () {
            console.log("Logout button clicked"); // Debugging log
            if (confirm("Are you sure you want to logout?")) {
                window.location.href = "../index.html";
            }
        };

        logoutBtn.addEventListener("click", logoutFunction);
        sidebarLogoutBtn.addEventListener("click", logoutFunction);
    } else {
        console.error("Logout buttons not found in the DOM"); // Debugging log
    }
});
