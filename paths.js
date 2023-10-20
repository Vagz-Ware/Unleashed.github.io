document.addEventListener("DOMContentLoaded", function() {
    const element = document.querySelector(".fade-in");
  
    // Function to add the "visible" class to the element, making it fade in.
    function fadeIn() {
      element.classList.add("visible");
    }
  
    // Add a scroll event listener to trigger the fade-in effect when the element is in the viewport.
    window.addEventListener("scroll", function() {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (elementTop < windowHeight) {
        fadeIn();
        // Remove the scroll event listener once the element is visible to prevent multiple fades.
        window.removeEventListener("scroll", fadeIn);
      }
    });
  });
  