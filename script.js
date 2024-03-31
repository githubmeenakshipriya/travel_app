// JavaScript code to update place names every 0.2 seconds
    const placeNames = ["Paris", "New York", "Tokyo", "Sydney", "London"];
    let index = 0;

    function updatePlaceName() {
        document.getElementById('placeName').textContent = ` ${placeNames[index]}`;
        index = (index + 1) % placeNames.length;
    }

    setInterval(updatePlaceName, 200);


// Function to validate booking form
function validateBooking() {
  var whereTo = document.getElementById('whereTo').value;
  var howMany = document.getElementById('howMany').value;
  var startDate = document.getElementById('startDate').value;
  var endDate = document.getElementById('endDate').value;
  var description = document.getElementById('description').value;

  if (whereTo && howMany && startDate && endDate && description) {
    alert('Booking successful!');
  } else {
    alert('Please fill in all fields.');
  }
}

function validateForm() {
  var fullname = document.getElementById('fullname').value.trim();
  var contact = document.getElementById('contact').value.trim();
  var dob = document.getElementById('dob').value.trim();
  var email = document.getElementById('email').value.trim();
  var password = document.getElementById('password').value.trim();
  var gender = document.getElementById('gender').value;

  // Basic validation example (you can customize this further)
  if (fullname === '' || contact === '' || dob === '' || email === '' || password === '' || gender === '') {
    alert('Please fill in all fields.');
    return false;
  }

  // Additional validation can be added here

  return true;
}
