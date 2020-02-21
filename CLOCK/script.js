window.onload = function() { time(); };

// https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

function play() {
  var r = document.getElementById('radio');
  var a = document.getElementById('audio');
  var b = document.getElementById('light');
  var x = parseInt(r.attributes.x.value);

  if (x == 700) { r.attributes.x.value = 715; a.play(); b.attributes.fill.value = "#006600"; }
  else { r.attributes.x.value = 700; a.pause(); b.attributes.fill.value = "#800000"; }
}

function alarm() {
  var a = document.getElementById('alarm');
  var h = parseInt(a.attributes.height.value);
  var y = parseInt(a.attributes.y.value);
  var p = document.getElementById('plus');
  var m = document.getElementById('minus');
  var hrs = document.getElementById('hrs');
  var mins = document.getElementById('mins');

  if (h == 25) {
    a.attributes.height.value = 20; a.attributes.y.value = 145;
    p.style.opacity = 0.7; m.style.opacity = 0.7;
    hrs.style.color = "#FFFFFF"; hrs.style.opacity = 0.5;
    mins.style.color = "#FFFFFF"; mins.style.opacity = 0.5;
  }
  else {
    a.attributes.height.value = 25; a.attributes.y.value = 140;
    p.style.opacity = 0.1; m.style.opacity = 0.1;
    hrs.style.color = "#201E1E"; hrs.style.opacity = 1.0;
    mins.style.color = "#201E1E"; mins.style.opacity = 1.0;
    time();
  }
}

function plus() {
  var p = document.getElementById('plus');

  if (p.style.opacity == 0.7) {
    var hrs = document.getElementById('hrs');
    var mins = document.getElementById('mins');

    var m = parseInt(mins.innerHTML);
    var h = parseInt(hrs.innerHTML);

    m = String((m + 1) % 60);
    if (m == 0) { h = String((h + 1) % 13); }

    if (m.length == 1) { m = "0" + m; }
    if (String(h).length == 1) { h = "0" + h; }

    hrs.innerHTML = String(h)
    mins.innerHTML = String(m);
  }
}

async function time() {
  var a = document.getElementById('alarm');
  var hrs = document.getElementById('hrs');
  var mins = document.getElementById('mins');

  while (a.attributes.height.value == 25) {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var sm = String(m);
    var sh = String(h);
    if (sm.length == 1) { sm = "0" + m; }
    if (sh.length == 1) { sh = "0" + h; }
    hrs.innerHTML = sh;
    mins.innerHTML = sm;
    await sleep(1000);
  }
}
