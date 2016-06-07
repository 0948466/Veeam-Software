
var btnEE = document.querySelector(".btn-Enterprise-Edition");
var btnSMB = document.querySelector(".btn-SMB-Edition");
var EE = document.querySelector(".Enterprise-Edition");
var SMB = document.querySelector(".SMB-Edition");

btnEE.addEventListener("click", function (event) {
  event.preventDefault();    
  btnEE.classList.add("active");
  btnSMB.classList.remove("active");
  EE.classList.remove("hidden");
  SMB.classList.add("hidden");
});


btnSMB.addEventListener("click", function (event) {
  event.preventDefault();    
  btnSMB.classList.add("active");
  btnEE.classList.remove("active");
  EE.classList.add("hidden");
  SMB.classList.remove("hidden");
});
