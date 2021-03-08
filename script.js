window.transitionToPage = function(href) {
    var l = document.getElementsByClassName("curtain-left")[0];
    var r = document.getElementsByClassName("curtain-right")[0];
    l.style.left = "0%";
    r.style.right = "0%";
    setTimeout(function() { 
        window.location.href = href
    }, 1000)
}

var index;
var len;

document.addEventListener('DOMContentLoaded', function(event) {
    try {
      index = 0;
      len = document.getElementsByClassName("notes-wrapper").length;

      var l = document.getElementsByClassName("curtain-left-closed")[0];
      var r = document.getElementsByClassName("curtain-right-closed")[0];
      l.style.left = "-50%";
      r.style.right = "-50%";
    } catch(err)
      {}
})

window.transitionBackToPage = function(href) {
    var l = document.getElementsByClassName("curtain-left-closed")[0];
    var r = document.getElementsByClassName("curtain-right-closed")[0];
    l.style.left = "0%";
    r.style.right = "0%";
    setTimeout(function() { 
        window.location.href = href
    }, 1000)
}

window.moveLeft = function() {
  var items = document.getElementsByClassName("notes-wrapper");
  var select = items[index];
 
  select.classList.add("hidden");
  select.classList.remove("visible");
  
  index += 1;
  if (index > len - 1) {index = 0;}
  
  select = items[index];
  select.classList.remove("hidden");
  select.classList.add("visible");
}

window.moveRight = function() {
  var items = document.getElementsByClassName("notes-wrapper");
  var select = items[index];
 
  select.classList.add("hidden");
  select.classList.remove("visible");
  
  index -= 1;
  if (index < 0) {index = len - 1;}
  
  select = items[index];
  select.classList.remove("hidden");
  select.classList.add("visible");
}
