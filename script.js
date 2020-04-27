
const slider = document.getElementById('slider');
const css = document.getElementById('css');
const input = document.getElementById('input');

slider.addEventListener('click', function(event){
  input.checked ? 
  css.href="light.css"
  : css.href="dark.css"
});
