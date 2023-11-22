
//Declaring variables
let minutesInput = document.getElementById('ageInput');
let secondsOutput = document.getElementById('daysOutput');
let calButton = document.getElementById('calButton');

//Adding event listener
calButton.addEventListener('click', 

//Adding function
function ageToDays() {
  let age = parseInt(ageInput.value);

  //Adding validation
  if (!isNaN(age)) {
    let Days = age * 365;
    daysOutput.value = Days;
  } else {
    alert('PLease enter a number');
  }
});