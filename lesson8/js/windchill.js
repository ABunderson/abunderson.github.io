/*s = wind speed t = temperature*/
const s = parseFloat(document.getElementById("speed").textContent);;
const t = parseFloat(document.getElementById("temp").textContent);

let wc = 35.74+(0.6215*t)-(35.75*Math.pow(s, 0.16))+(.4275*t*Math.pow(s, 0.16));
wc = Math.round(wc);
if (t <= 50 && s > 3){
document.getElementById('chill').textContent= wc + "\xB0" + "F";
}
else {
    document.getElementById('chill').textContent= "N/A";
}


