window.onload = function() { alert("Press the up and down arrow keys."); };

let i = 0;
document.addEventListener('keyup', (e) => {
  if (e.code === "ArrowDown") {
    if (i > 0) { hide(i-1) }
    if (i <= 20) { reveal(i); i++; }}
  else if (e.code === "ArrowUp") {
    if (i <= 20) { hide(i); }
    if ((i <= 21) && (i > 0)) { reveal(i-1); i--; }}
});

function hide(i) { document.getElementById(i.toString()).style.display = "none"; }
function reveal(i) { document.getElementById(i.toString()).style.display = "block"; }
