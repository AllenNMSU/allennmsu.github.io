const tripForm = document.getElementById("tripForm");
const tripMessage = document.getElementById("tripMessage");

tripForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const futurePlace = document.getElementById("futurePlace").value;

  tripMessage.textContent = futurePlace + " has been submitted to Allen to look into for a future family trip!";
});