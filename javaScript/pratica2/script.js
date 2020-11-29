window.onload = function () {
  alert("Welcome to the system!!");

}
let corpo = document.querySelector("#corpo");
let lista = document.getElementById("formulario-principal")
let newDate = document.getElementById("newDataTime");
let passwrd = document.getElementById("password");
let btn = document.getElementById("btn");
let delay = [500, 3000, 10000, 2000];
colors = ["purple", "white", "green", "red"];
const zeroFill = n => {
  return ('0' + n).slice(-2);
}


setInterval(function () {
  let newTimeDate = new Date();
  let utcTime = zeroFill(newTimeDate.getUTCDate()) + '/' + zeroFill(newTimeDate.getMonth()) + '/' + newTimeDate.getFullYear() + ' ' + zeroFill(newTimeDate.getHours()) + ':' + zeroFill(newTimeDate.getMinutes()) + ':' + zeroFill(newTimeDate.getSeconds());
  newDate.innerHTML = utcTime;
}, delay[0]);


function myTimeOut() {
  corpo.style.backgroundColor = colors[0];
  if (lista.style.display === "none") {
    lista.style.display = "block";
  } else {
    lista.style.display = "none";
  }
  corpo.style.color = color[1];
}



setTimeout(myTimeOut, delay[1]);
setInterval(myInterval, delay[2]);

btn.onclick = function (event) {

  if (passwrd.value === '' || passwrd.value.length < 10) {
    alert("Not a valid password");

  } else {
    confirm("Authentication Verified!");

  }
  event.preventDefault();
}
function myInterval() {
  let confirmation = confirm("Are you still here??");
  if (confirmation === true) {
    corpo.style.backgroundColor = colors[2];
  } else {
    corpo.style.backgroundColor = colors[3];
    setTimeout(() => {
      window.close();
    }, delay[3]);
  }
}