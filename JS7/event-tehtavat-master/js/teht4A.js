const pics = [
  {
    thumb: 'http://www.fillmurray.com/100/100',
    big: 'http://www.fillmurray.com/640/480',
  },
  {
    thumb: 'http://lorempixel.com/100/100/sports/1/',
    big: 'http://lorempixel.com//640/480/sports/1/',
  },
  {
    thumb: 'https://placeimg.com/100/100/tech',
    big: 'https://placeimg.com/640/480/tech',
  },
];

for(let i = 0; i<pics.length; i++){
  let li = document.createElement('li');
  let body = document.getElementsByTagName('body')[0];
  li.innerHTML='<img src="'+pics[i].thumb+'">';
  body.insertBefore(li, body.firstChild);
}

document.getElementsByTagName('li')[2].addEventListener("click",show1);
document.getElementsByTagName('li')[1].addEventListener("click",show2);
document.getElementsByTagName('li')[0].addEventListener("click",show3);
document.querySelector('div').addEventListener("click", hide);

function show1() {
  document.getElementsByTagName('img')[3].src=pics[0].big;
}
function show2() {
  document.getElementsByTagName('img')[3].src=pics[1].big;
}
function show3() {
  document.getElementsByTagName('img')[3].src=pics[2].big;
}
function hide(){
  document.getElementsByTagName('img')[3].src = '';
}