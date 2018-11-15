let ima = document.getElementById('kuva');
ima.addEventListener('mouseenter', function(evt){
  document.getElementsByTagName('p')[0].style.opacity = "1";
});
ima.addEventListener('mouseleave', function(evt){
  document.getElementsByTagName('p')[0].style.opacity = "0";
});