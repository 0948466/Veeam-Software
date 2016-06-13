var btnNavFirst = document.querySelector(".first");
var btnNavSecond = document.querySelector(".second");
var ee = document.querySelector(".tab-page-second");
var smb = document.querySelector(".tab-page-first");

btnNavFirst.addEventListener("click", function (event) {
  event.preventDefault();    
  btnNavFirst.classList.add("active");
  btnNavSecond.classList.remove("active");
  ee.classList.remove("hidden");
  smb.classList.add("hidden");
});


btnNavSecond.addEventListener("click", function (event) {
  event.preventDefault();    
  btnNavSecond.classList.add("active");
  btnNavFirst.classList.remove("active");
  ee.classList.add("hidden");
  smb.classList.remove("hidden");
});

var linkvideo1 = document.querySelector(".click-to-look-smb");
var linkvideo2 = document.querySelector(".click-to-look-ee");
var popupvideo = document.querySelector(".modal-video");
var closevideo = document.querySelector(".modal-video-close");
var overlay = document.querySelector(".modal-overlay");


linkvideo1.addEventListener("click", function (event) {
  event.preventDefault();
  popupvideo.classList.remove("hidden");
  overlay.classList.remove("hidden");    
});

linkvideo2.addEventListener("click", function (event) {
  event.preventDefault();
  popupvideo.classList.remove("hidden");
  overlay.classList.remove("hidden");    
});

closevideo.addEventListener("click", function (event) {
    event.preventDefault();
    popupvideo.classList.add("hidden");
    overlay.classList.add("hidden");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (!popupvideo.classList.contains("hidden")) {
            popupvideo.classList.add("hidden");
            overlay.classList.add("hidden");
        }
    }
});