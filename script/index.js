
//Declaring variables
let minutesInput = document.getElementById('ageInput');
let secondsOutput = document.getElementById('daysOutput');
let calButton = document.getElementById('calButton');

calButton.addEventListener('click', 

//Adding function 
function ageToDays() {
  let age = parseInt(ageInput.value);

  //Adding validation, taking inputed age and multipying by 365
  if (!isNaN(age)) {
    let Days = age * 365;
    daysOutput.value = Days;
  } else {
    alert('PLease enter a number');
  }
});