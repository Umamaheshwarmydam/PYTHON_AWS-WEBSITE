document.addEventListener("DOMContentLoaded", function() {
    // Get the header buttons
    var homeButton = document.querySelector("#home");
    var pythonButton = document.querySelector("#py");
    var awsButton = document.querySelector("#aws");
  
    // Add click event listeners to the header buttons
    homeButton.addEventListener("click", function() {
      window.location.href = "#image1";
    });
    pythonButton.addEventListener("click", function() {
      window.location.href = "#wt";
    });
    awsButton.addEventListener("click", function() {
      window.location.href = "#wtaws";
    });
  });
 