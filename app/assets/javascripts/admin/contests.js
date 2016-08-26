if(document.querySelector(".timer") != null) {
  var pt = document.querySelector(".timer").getAttribute("data-created-at");
  var created_at = Number.parseInt(pt)*1000;

  window.setInterval(function() {
    var ends_at = created_at + (48 * 60 * 60 * 1000)

    var rem = ends_at - (new Date());

    var hours = rem / (60 * 60 * 1000);
    var minutes = (hours - Math.floor(hours)) * 60;
    var seconds = (minutes - Math.floor(minutes)) * 60;
    
    document.querySelector("#countdown").innerText =  ("00" + Math.floor(hours)).substring(Math.floor(hours).toString().length) + ":" + ("00" + Math.floor(minutes)).substring(Math.floor(minutes).toString().length)+ ":" + ("00" + Math.floor(seconds)).substring(Math.floor(seconds).toString().length);
  }, 500);
}