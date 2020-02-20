function play() {
  var r = document.getElementById('radio');
  var a = document.getElementById('audio');
  var b = document.getElementById('light');
  var x = parseInt(r.attributes.x.value);

  if (x == 700) { r.attributes.x.value = 715; a.play(); b.attributes.fill.value = "#008000"; }
  else { r.attributes.x.value = 700; a.pause(); b.attributes.fill.value = "#b30000"; }
}
