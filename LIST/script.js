window.onload = function() { ani(); };

async function ani() {

  var pantone = ["#9BB7D4", "#C74375", "#BF1932", "#7BC4C4",
  "#E2583E", "#53B0AE", "#DECDBE", "#9B1B30", "#5A5B9F", "#F0C05A", "#45B5AA",
  "#D94F70", "#DD4124", "#009473", "#B163A3", "#955251", "#F7CAC9",
  "#92A8D1", "#88B04B", "#5F4B8B", "#FF6F61", "#0F4C81"]

  var links = document.getElementsByTagName("a");

  var i = 0;

  while(true) {
    document.body.style.backgroundColor = pantone[i%pantone.length];
    links[i%7].style.color = pantone[(i+1)%pantone.length];
    await sleep(3000);
    i++;
  }
}

// https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
