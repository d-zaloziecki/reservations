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
        // alert("welcome " + i +"!!!")
       const welcome = document.createElement("p");
       welcome.innerHTML = "welcome " + i +"!!!";
       document.body.appendChild(welcome); 
       return;
      }

      else if (reservations[i].claimed == true) {
        // alert("I'm informing you about the situation!");
       const inform = document.createElement("p");
       inform.innerHTML = " Hello " +i+ ", I'm informing you about the situation!";
       document.body.appendChild(inform); 
       return;
      }
    }
  }

  // alert("I'm sorry, there is no reservation under this name.")
  const noReservation = document.createElement("p");
  noReservation.innerHTML = "I'm sorry, there is no reservation under this name.";
  document.body.appendChild(noReservation);

  reservations.name = { claimed: true}
 
  // alert("Hello "+ name + ". There is an empty table so we made you a new reservation")
  const newReservation = document.createElement("p");
  newReservation.innerHTML = "Hello "+ name + ". There is an empty table so we made you a new reservation";
  document.body.appendChild(newReservation);
  
  

}

const getName = function(){
  name =  document.getElementById("name").value;
  claimReservation();
}
