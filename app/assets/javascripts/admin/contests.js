if(document.querySelector(".timer") != null) {
  var created_at = new Date(Number.parseInt(document.querySelector(".timer").getAttribute("data-created-at"))*1000);

  window.setInterval(function() {
    var ends_at = new Date(created_at.getTime());
    ends_at.setHours(ends_at.getHours() + 48);
    
    var remaining = new Date(ends_at - Date.now());
    
    document.querySelector("#countdown").innerText = remaining.getHours() + ":" + remaining.getMinutes() + ":" + remaining.getSeconds();
  }, 500);
}