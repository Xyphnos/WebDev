let time, h, m, s, ts, cl;

setInterval(timer, 1000);
cl = document.getElementById('kello');
function timer() {
  time = new Date();
  h = aika(time.getHours());
  m = aika(time.getMinutes());
  s = aika(time.getSeconds());
  ts = h + ":" + m + ":" + s;
  cl.innerHTML = ts;
}
function aika(i){
  if(i < 10){
    i = "0" + i;
  }
  return i;
}


