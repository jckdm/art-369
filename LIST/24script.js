window.onload = function() { alert("Press the enter key."); };

var arr = [
"MTA*MNR STATION TIX NEW YORK NY : Tuesday, Dec. 17, 2019 : $17.75",
"SQ *KONDITORI SWEDISH BROOKLYN NY : Friday, Dec. 20, 2019 : $7.00",
"LASSEN & HENNIGS BROOKLYN NY : Friday, Dec. 20, 2019 : $11.68",
"SQ *BENDOM BROOKLYN IN BROOKLYN NY : Saturday, Dec. 21, 2019 : $37.00",
"BUFFALO EXCHANGE NY04 BROOKLYN NY : Saturday, Dec. 21, 2019 : $34.00",
"SQ *SMITH STREET BAGELS BROOKLYN NY 11201 US : Tuesday, Dec. 24, 2019 : $9.80",
"HAPPY DAYS DINER 718-8758361 NY 11201 US : Tuesday, Dec. 24, 2019 : $44.42",
"HANCO’S. BROOKLYN NY 11215 US : Thursday, Dec. 26, 2019 : $25.04",
"KEY FOOD 2182 BROOKLYN NY 11233 US : Saturday, Dec. 28, 2019 : $34.60",
"SQ *BAREBURGER 877-417-4551 NY 11201 US : Monday, Dec. 30, 2019 : $55.03",
"MURA BROOKLYN NY 11215 US : Monday, Dec. 30, 2019 : $28.00",
"TRADER JOE'S #558 QPS BROOKLYN NY 11201 US : Friday, Jan. 3, 2020 : $11.44",
"KEY FOOD 1570 BROOKLYN NY 11201 US : Saturday, Jan. 4, 2020 : $17.59",
"STRAND BOOK STORE RETAIL NEW YORK NY 10003 US : Monday, Jan. 6, 2020 : $51.15",
"PABLITO’S TAQUERIA RES BROOKLYN NY 11215 US : Friday, Jan. 10, 2020 : $22.60",
"MTA*MNR STATION TIX NEW YORK NY 10170 US : Saturday, Jan. 11, 2020 : $17.75",
"CKO*www.snackpass.co 440-5540448 OH 44139 US : Saturday, Jan. 11, 2020 : $9.65",
"LLBEAN-SHOPSATYALE NEW HAVEN CT 06511 US : Sunday, Jan. 12, 2020 : $21.26",
"CKO*www.snackpass.co 440-5540448 OH 44139 US : Thursday, Jan. 16, 2020 : $10.33",
"CKO*www.snackpass.co 440-5540448 OH 44139 US : Wednesday, Jan. 15, 2020 : $12.08",
"CKO*www.snackpass.co 440-5540448 OH 44139 US : Friday, Jan. 17, 2020 : $5.31"
];

let i = 0;
document.addEventListener('keyup', (e) => {
  if ((i <= 21) && (i >= 0)) {
    if (e.code === "Enter") {
      document.getElementById('myText').innerHTML = arr[i];
      document.getElementById('text').width = Math.floor(Math.random() * Math.floor($(window).width()));
      $("#text").textfill({ maxFontPixels: 50});
      i++;
    }
  }
  if (i == 22) { document.getElementById('text').innerHTML = ""; location.reload();}
});
