window.onload = function() { ani(); };

async function ani() {

  var yr = document.getElementById('yr');

  var pantone = ["#9BB7D4", "#C74375", "#BF1932", "#7BC4C4",
                "#E2583E", "#53B0AE", "#DECDBE", "#9B1B30", "#5A5B9F", "#F0C05A",
                "#45B5AA", "#D94F70", "#DD4124", "#009473", "#B163A3", "#955251",
                "#F7CAC9", "#92A8D1", "#88B04B", "#5F4B8B", "#FF6F61", "#0F4C81"];

  var pantone_names = ["Cerulean", "Fuchsia Rose", "True Red", "Aqua Sky", "Tigerlily",
                      "Blue Turquoise", "Sand Dollar", "Chili Pepper", "Blue Iris", "Mimosa",
                      "Turquoise", "Honeysuckle", "Tangerine Tango", "Emerald", "Radiant Orchid",
                      "Marsala", "Rose Quartz", "Serenity", "Greenery", "Ultra Violet",
                      "Living Coral", "Classic Blue"];

  var yrs = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
             2010, 2011, 2012, 2013, 2014, 2015, 2016, 2016, 2017, 2018,
             2019, 2020];

  var links = document.getElementsByTagName("a");
  var i = 0;
  yr.innerHTML= 2000;

  while(true) {
    document.body.style.backgroundColor = pantone[i%pantone.length];
    document.getElementById('pan_c').innerHTML = pantone_names[i%pantone.length];
    links[i%16].style.color = pantone[(i+1)%pantone.length];
    await sleep(3000);
    i++;
    yr.innerHTML = yrs[i%pantone.length];
  }
}

// https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
