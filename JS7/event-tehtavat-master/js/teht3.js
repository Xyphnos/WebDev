
let ans;
let vas = document.getElementById('vastaus');
let no1 = document.getElementById('num1');
let no2 = document.getElementById('num2');
parseFloat(no1);
parseFloat(no2);


let but1 = document.getElementById('sum');
but1.addEventListener('click', function(){
  ans = +no1.value + +no2.value;
  vas.innerHTML = ans;
});
let but2 = document.getElementById('sub');
but2.addEventListener('click', function(){
  ans = +no1.value - +no2.value;
  vas.innerHTML = ans;
});
let but3 = document.getElementById('multi');
but3.addEventListener('click', function(){
  ans = no1.value * no2.value;
  vas.innerHTML = ans;
});
let but4 = document.getElementById('div');
but4.addEventListener('click', function(){
  ans = no1.value / no2.value;
  vas.innerHTML = ans;
});



