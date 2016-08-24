if(document.querySelector(".timer") != null) {
  var pt = document.querySelector(".timer").getAttribute("data-created-at");
  var created_at = Number.parseInt(pt)*1000;

  window.setInterval(function() {
    var ends_at = created_at + (48 * 60 * 60 * 1000)

    var rem = ends_at - (new Date());

    let hours = rem / (60 * 60 * 1000);
    let minutes = (hours - Math.floor(hours)) * 60;
    var seconds = (minutes - Math.floor(minutes)) * 60;
    
    document.querySelector("#countdown").innerText = Math.floor(hours) + ":" + Math.floor(minutes) + ":" + Math.floor(seconds);
  }, 500);
}