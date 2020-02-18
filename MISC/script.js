window.onload = function() { render(); };

async function render() {
  var circ = document.getElementById('circ');
  while (true) {
    await sleep(2000);
    circ.style.stroke = "#0000FF";
    await sleep(2000);
    circ.style.stroke = "#FFFFFF";
  }
};

// https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
