// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}

// Event listener for dark mode toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("change", () => {
    toggleDarkMode();
});

// Check the user's preference for dark mode (if set previously)
if (localStorage.getItem("darkMode") === "enabled") {
    toggleDarkMode();
    darkModeToggle.checked = true;
}

// Store the user's dark mode preference
darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});
