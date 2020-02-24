function appear() {
  document.getElementById('light').style.display = "block";
  document.getElementById('lite').style.display = "block";
  document.getElementById('lite2').style.display = "block";
  document.getElementById('space').style.display = "block";
  document.getElementById('big').style.display = "block";
  document.getElementById('rect').style.display = "none";
  document.getElementById('sorry').style.display = "none";
  document.getElementById('ears').style.display = "none";
}

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       appear();
       wait();
   }
});

function change() {
  document.getElementById('lite2').innerHTML = "around each corner dusk is coming to join,";
}

function wait() {
  $(window).scroll(function() {
     if($(window).scrollTop() == 0) {
         change();
     }
  });
}
