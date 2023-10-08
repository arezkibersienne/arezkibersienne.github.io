document.addEventListener("DOMContentLoaded", function () {
  // Your JavaScript code here
  var modal = document.getElementById("myModal");
  var closeBtn = document.getElementById("closeModalBtn");

  // Handle modal opening and closing
  if (modal && closeBtn) {
    document.body.style.overflow = "hidden"; // Disable scrolling

    closeBtn.onclick = function () {
      modal.classList.add("fade-out"); // Apply the fade-out class
      modal.style.display = "none";
      modal.classList.add("fade-out"); // Remove the fade-out class
      document.body.style.overflow = "scroll"; // Disable scrolling

      // Ensure the timeout matches the transition duration
    };
  }
});
