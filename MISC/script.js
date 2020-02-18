window.onload = function() { render(); };

async function render() {
  var circ = document.getElementById('circ');
  while (true) {
    await sleep(2000);
    circ.style.stroke = "#0000FFB3";
    await sleep(2000);
    circ.style.stroke = "#FFFFFFB3";
  }
};

// https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
