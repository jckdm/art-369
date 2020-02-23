window.onload = function() { time(); };

async function play() {
  var r = document.getElementById('radio');
  var a = document.getElementById('audio');
  var d = a.duration * 1000;
  var b = document.getElementById('light');
  var x = parseInt(r.attributes.x.value);

  if (x == 700) { rOn(r, b); a.play(); await sleep(d); rOff(r, b); }
  if (x == 715) { rOff(r, b); a.pause(); }
}

async function snooze() {
  var s = document.getElementById('snooze');
  var h = parseInt(s.attributes.height.value);
  var lite = document.getElementById('alarmLight');

  if (h == 25) { sOn(s, lite); alarm(true); }
}

async function alarm(flag) {
  var a = document.getElementById('alarm');
  var h = parseInt(a.attributes.height.value);
  var y = parseInt(a.attributes.y.value);
  var p = document.getElementById('plus');
  var m = document.getElementById('minus');
  var hrs = document.getElementById('hrs');
  var mins = document.getElementById('mins');
  var lite = document.getElementById('alarmLight');
  var s = document.getElementById('snooze');

  // snooze
  if (flag == true) { await sleep(540000); sOff(s, lite); s.disabled = false; play(); }
  else {
    if (h == 25) { aOn(a, p, hrs, mins); }
    else {
      if (p.style.opacity == 0.7) { var aTime = gt(); lite.attributes.fill.value = "#006600"; }
      aOff(a, p, hrs, mins, aTime, lite);
    }
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
    if (m == 0) { h = String((h + 1) % 24); }

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

function sOn(s, l) {
  s.disabled = true;
  s.attributes.height.value = 20; s.attributes.y.value = 145;
  l.attributes.fill.value = "#006600";
}

function sOff(s, l) {
  s.attributes.height.value = 25; s.attributes.y.value = 140;
  l.attributes.fill.value = "#800000";
}

function rOn(r, l) {
  r.attributes.x.value = 715;
  l.attributes.fill.value = "#006600";
}

function rOff(r, l) {
  r.attributes.x.value = 700;
  l.attributes.fill.value = "#800000";
}

function aOn(a, p, h, m) {
  a.attributes.height.value = 20; a.attributes.y.value = 145;
  p.style.opacity = 0.7; m.style.opacity = 0.7;
  h.style.color = "#FFFFFF"; h.style.opacity = 0.5;
  m.style.color = "#FFFFFF"; m.style.opacity = 0.5;
}

async function aOff(a, p, h, m, aT, l) {
  a.attributes.height.value = 25; a.attributes.y.value = 140;
  p.style.opacity = 0.1; m.style.opacity = 0.1;
  h.style.color = "#201E1E"; h.style.opacity = 1.0;
  m.style.color = "#201E1E"; m.style.opacity = 1.0;
  time();
  await sleep(aT);
  l.attributes.fill.value = "#800000";
  play();
}

function gt() {
  var d = new Date();
  var cHrs = parseInt(document.getElementById('hrs').innerHTML);
  var cMins = parseInt(document.getElementById('mins').innerHTML);
  return ((((cMins - d.getMinutes()) * 60000) + ((cHrs - d.getHours()) * 3600000)) - d.getSeconds() * 1000);
}

// https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

var modal = document.getElementById("Modal");
var btn = document.getElementById("Btn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() { modal.style.display = "block"; }
span.onclick = function() { modal.style.display = "none"; }
