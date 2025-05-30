/* Toggles automatically between desktop and mobile modes */
function handleDeviceSpecificCode() 
{
  if (/Mobi|Android|iPhone|iPad|iPod/.test(navigator.userAgent)) 
  {
    // Code for mobile devices
    console.log("Mobile device detected");
    var dropdown = document.getElementById('hamburger');
    dropdown.style.display = "flex";
  } 
  else 
  {
    // Code for desktop
    console.log("Desktop detected");
    var toolbar = document.getElementById('portfolioToolbar');
    toolbar.style.display = "flex";
  }
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function hamburgerDrop() {
  var x = document.getElementById("myLinks");
  if (x.style.right === "-100%" || x.style.right === "") {
    x.style.right = "0%"; // Slide in from the right
  } else {
    x.style.right = "-100%"; // Slide out of view to the right
  }
}