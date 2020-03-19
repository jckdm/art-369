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

window.onload = function() { time(); snoo.disabled = alarm.disabled = radio.disabled = false; };

async function play(flag) {
  if (radio.attributes.x.value == 650 && on == true) {
    rOn();
    await sleep(audio.duration * 1000);
    rOff();
  }
  else if (flag == false) {
    // radio is on when alarm/snooze goes off
    if (alarm.disabled == true && on == true) {
      rOff();
      await sleep(2000);
      rOn();
    }
  }
  else if (on == true) { rOff(); }
}

async function snooze() {
  if (snoo.disabled == false && on == true) {
    if (snoo.attributes.height.value == 25) { sOn(); ala(true); }
  }
}

function power() {
  flag = radio.attributes.x.value == 650 ? false : true;
  if (pow.attributes.x.value == 840) { powerOff(flag); }
  else { powerOn(flag); }
}

async function ala(flag) {
  if (alarm.disabled == false && snoo.disabled == false && radio.disabled == false && on == true) {
    // snooze
    if (flag == true) {
      snoo.disabled = alarm.disabled = true;
      snoo.style.cursor = alarm.style.cursor = "not-allowed";
      await sleep(540000);
      flag = pow.attributes.x.value == 840 ? false : true;
      flag2 = radio.attributes.x.value == 650 ? false : true;
      sOff(flag, flag2);
      play(false);
    }
    // just wanna set the alarm
    else {
      if (alarm.attributes.height.value == 25) { aOn(); }
      else { aOff(gt()); }
    }
  }
}

function more() {
  var h = parseInt(hrs.innerHTML);
  var m = parseInt(mins.innerHTML);
  var d = new Date();
  var dm = d.getMinutes() - m;
  var dh = d.getHours() - h;

  if (((dh == 0 && dm < 1) || dh < 0) && alarm.attributes.height.value == 20) {
    minus.style.opacity = 0.7;
    minus.style.cursor = "pointer";
  }
  if (alarm.attributes.height.value == 20 && plus.style.opacity == 0.7) {
    m = String((m + 1) % 60);
    if (m == 0) { h = String((h + 1) % 24); }

    if (m.length == 1) { m = "0" + m; }
    if (String(h).length == 1) { h = "0" + h; }

    hrs.innerHTML = String(h)
    mins.innerHTML = String(m);
  }
}

function less() {
  var h = parseInt(hrs.innerHTML);
  var m = parseInt(mins.innerHTML);
  var d = new Date();
  var dm = d.getMinutes() - m;
  var dh = d.getHours() - h;

  if ((dh <= 0 && dm < 0) || dh < 0) {
    minus.style.opacity = 0.7;
    minus.style.cursor = "pointer";
    if (alarm.attributes.height.value == 20) {
      m = String((m - 1) % 60);
      if (m == -1) { h = String((h - 1) % 24); }
      if (m < 0) { m = 60 + parseInt(m); }
      if (m.length == 1) { m = "0" + m; }
      if (String(h).length == 1) { h = "0" + h; }

      hrs.innerHTML = String(h)
      mins.innerHTML = String(m);
    }
  }
  else { minus.style.opacity = 0.1; minus.style.cursor = "not-allowed"; }
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

function powerOff(flag) {
  on = false;
  snoo.disabled = alarm.disabled = radio.disabled = true;
  pow.attributes.x.value = 848;
  plus.style.opacity = minus.style.opacity = 0.0;
  alarmLight.attributes.fill.value = radioLight.attributes.fill.value = "#1C1A1A";
  hrs.innerHTML = mins.innerHTML = "";
  snoo.style.cursor = alarm.style.cursor = radio.style.cursor = plus.style.cursor = minus.style.cursor = "default";
  if (flag == true) { audio.pause(); }
  if (alarm.attributes.height.value == 20) { aOff(0); }
  if (snoo.attributes.height.value == 20) { sOff(); }
}

function powerOn(flag) {
  on = true;
  snoo.disabled = alarm.disabled = radio.disabled = false;
  pow.attributes.x.value = 840;
  plus.style.opacity = minus.style.opacity = 0.1;
  alarmLight.attributes.fill.value = radioLight.attributes.fill.value = "#800000";
  time();
  snoo.style.cursor = alarm.style.cursor = radio.style.cursor = "pointer";
  plus.style.cursor = minus.style.cursor = "not-allowed";
  if (flag == true) { audio.play(); radioLight.attributes.fill.value = "#006600"; }
}

function sOn() {
  // disabled in ala()
  snoo.attributes.height.value = 20; snoo.attributes.y.value = 145;
  alarmLight.attributes.fill.value = "#006600";
}

function sOff(flag, flag2) {
  if (flag2 == false) { snoo.disabled = alarm.disabled = radio.disabled = false; }
  snoo.style.cursor = alarm.style.cursor = "pointer";
  snoo.attributes.height.value = 25; snoo.attributes.y.value = 140;
  if (flag == false) { alarmLight.attributes.fill.value = "#800000"; }
}

function rOn() {
  snoo.disabled = alarm.disabled = radio.disabled = true;
  radio.attributes.x.value = 665;
  radioLight.attributes.fill.value = "#006600";
  audio.play();
}

function rOff() {
  snoo.disabled = alarm.disabled = radio.disabled = false;
  radio.attributes.x.value = 650;
  radioLight.attributes.fill.value = "#800000";
  audio.pause();
}

function aOn() {
  alarm.attributes.height.value = 20; alarm.attributes.y.value = 145;
  plus.style.opacity = 0.7;
  plus.style.cursor = "pointer";
  hrs.style.color = mins.style.color = "#FFFFFF";
  hrs.style.opacity = mins.style.opacity = 0.5;
}

async function aOff(aT) {
  alarm.attributes.height.value = 25; alarm.attributes.y.value = 140;
  plus.style.opacity = minus.style.opacity = 0.1;
  plus.style.cursor = minus.style.cursor = "not-allowed";
  hrs.style.color = mins.style.color = "#201E1E";
  hrs.style.opacity = mins.style.opacity = 0.8;
  time();
  if (aT > 5000) {
    alarmLight.attributes.fill.value = "#006600";
    alarm.style.cursor = "progress";
    snoo.disabled = alarm.disabled = true;
    await sleep(aT);
    if (on == true) {
      alarmLight.attributes.fill.value = "#800000";
      play(false);
      alarm.style.cursor = "pointer";
      snoo.disabled = alarm.disabled = false;
    }
  }
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
