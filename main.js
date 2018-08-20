const reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
}

// const name = prompt('Please enter the name for your reservation');

let name;


const claimReservation = function () {
  const names  = Object.keys(reservations);
  for (let i of names){
    lname = name.toLowerCase();
    lnames = i.toLowerCase();
    x = 0;
    if (lname == lnames){
      if (reservations[i].claimed == false){
        alert("welcome " + i +"!!!");
        return;
      }

      else if (reservations[i].claimed == true) {
        alert("I'm informing you about the situation!");
        return;
      }
    }
  }

  alert("I'm sorry, there is no reservation under this name.")
  reservations.name = { claimed: true}
  alert("Hello "+ name + ". There is an empty table so we made you a new reservation")

}

const getName = function(){
  name =  document.getElementById("name").value;
  claimReservation();
}
