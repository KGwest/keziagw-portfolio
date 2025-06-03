setTimeout(() => {
  loadingScreen.style.opacity = '0';
  ...
}, 12000);

window.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loading-screen");

  // Check if the user has already seen the loading screen this session
  if (sessionStorage.getItem("hasLoaded")) {
    // Immediately hide loading screen
    loadingScreen.style.display = "none";
  } else {
    // Show loading screen and fade out after 12 seconds
    setTimeout(() => {
      loadingScreen.style.opacity = "0";
      loadingScreen.style.transition = "opacity 1s ease-out";

      setTimeout(() => {
        loadingScreen.style.display = "none";
        sessionStorage.setItem("hasLoaded", "true"); // Set flag
      }, 1000);
    }, 12000);
  }
});
