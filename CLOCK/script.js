var snoo = document.getElementById('snooze');
var alarm = document.getElementById('alarm');
var radio = document.getElementById('radio');
var pow = document.getElementById('power');
var audio = document.getElementById('audio');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var alarmLight = document.getElementById('alarmLight');
var radioLight = document.getElementById('light');
var hrs = document.getElementById('hrs');
var mins = document.getElementById('mins');
var on = true;

window.onload = function() { time(); snoo.disabled = alarm.disabled = radio.disabled = false};

async function play() {
  if (radio.attributes.x.value == 700 && on == true) {
    rOn();
    await sleep(audio.duration * 1000);
    rOff();
  }
  // this doesn't work
  else {
    // radio is on when alarm goes off
    if (alarm.disabled == true && on == true) {
      rOff();
      await sleep(2000);
      rOn();
    }
    else if (on == true) { rOff(); }
  }
}

async function snooze() {
  if (snoo.disabled == false && on == true) {
    if (snoo.attributes.height.value == 25) { sOn(); ala(true); }
  }
}

function power() {
  if (pow.attributes.x.value == 850) { powerOff(); }
  else { powerOn(); }
}

async function ala(flag) {
  if (alarm.disabled == false && snoo.disabled == false && radio.disabled == false && on == true) {
    // snooze
    if (flag == true) {
      snoo.disabled = alarm.disabled = radio.disabled = true;
      await sleep(6000);
      sOff();
      play();
    }
    // just wanna set the alarm
    else {
      if (alarm.attributes.height.value == 25) { aOn(); }
      else { aOff(gt()); }
    }
  }
}

function more() {
  if (plus.style.opacity == 0.7) {

    var h = parseInt(hrs.innerHTML);
    var m = parseInt(mins.innerHTML);

    m = String((m + 1) % 60);
    if (m == 0) { h = String((h + 1) % 24); }

    if (m.length == 1) { m = "0" + m; }
    if (String(h).length == 1) { h = "0" + h; }

    hrs.innerHTML = String(h)
    mins.innerHTML = String(m);
  }
}

async function time() {
  while (alarm.attributes.height.value == 25 && on == true) {
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

function powerOff() {
  on = false;
  snoo.disabled = alarm.disabled = radio.disabled = true;
  pow.attributes.x.value = 858;
  plus.style.opacity = minus.style.opacity = 0.0;
  alarmLight.attributes.fill.value = radioLight.attributes.fill.value = "#1C1A1A";
  hrs.innerHTML = mins.innerHTML = "";
}

function powerOn() {
  on = true;
  snoo.disabled = alarm.disabled = radio.disabled = false;
  pow.attributes.x.value = 850;
  plus.style.opacity = minus.style.opacity = 0.1;
  alarmLight.attributes.fill.value = radioLight.attributes.fill.value = "#800000";
  time();
}

function sOn() {
  // disabled in ala()
  snoo.attributes.height.value = 20; snoo.attributes.y.value = 145;
  alarmLight.attributes.fill.value = "#006600";
}

function sOff() {
  snoo.disabled = alarm.disabled = radio.disabled = false;
  snoo.attributes.height.value = 25; snoo.attributes.y.value = 140;
  alarmLight.attributes.fill.value = "#800000";
}

function rOn() {
  snoo.disabled = alarm.disabled = radio.disabled = true;
  radio.attributes.x.value = 715;
  radioLight.attributes.fill.value = "#006600";
  audio.play();
}

function rOff() {
  snoo.disabled = alarm.disabled = radio.disabled = false;
  radio.attributes.x.value = 700;
  radioLight.attributes.fill.value = "#800000";
  audio.pause();
}

function aOn() {
  alarm.attributes.height.value = 20; alarm.attributes.y.value = 145;
  plus.style.opacity = minus.style.opacity = 0.7;
  hrs.style.color = mins.style.color = "#FFFFFF";
  hrs.style.opacity = mins.style.opacity = 0.5;
}

async function aOff(aT) {
  alarmLight.attributes.fill.value = "#006600";
  alarm.attributes.height.value = 25; alarm.attributes.y.value = 140;
  plus.style.opacity = minus.style.opacity = 0.1;
  hrs.style.color = mins.style.color = "#201E1E";
  hrs.style.opacity = mins.style.opacity = 1.0;
  time();
  snoo.disabled = alarm.disabled = true;
  await sleep(aT);
  alarmLight.attributes.fill.value = "#800000";
  play();
  snoo.disabled = alarm.disabled = false;
}

function gt() {
  var d = new Date();
  return ((((mins.innerHTML - d.getMinutes()) * 60000) + ((hrs.innerHTML - d.getHours()) * 3600000)) - d.getSeconds() * 1000);
}

// https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

var modal = document.getElementById("Modal");
var btn = document.getElementById("Btn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() { modal.style.display = "block"; }
span.onclick = function() { modal.style.display = "none"; }
