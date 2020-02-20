function play() {
  var r = document.getElementById("radio");
  var a = document.getElementById("audio");
  var x = parseInt(r.attributes.x.value);

  if (x == 700) { r.attributes.x.value = 715; a.play(); }
  else { r.attributes.x.value = 700; a.pause(); }
}
