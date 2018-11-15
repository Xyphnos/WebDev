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

const kuva = document.querySelector('.kuva img');

for (let i = 0; i < pics.length; i++) {
  let li = document.createElement('li');
  let body = document.getElementsByTagName('body')[0];
  let im = document.createElement('img');
  im.src = pics[i].thumb;
  li.appendChild(im);
  li.addEventListener('click', function(evt) {
    console.log(kuva);
    kuva.src = pics[i].big;
  });
  body.insertBefore(li, body.firstChild);
}
