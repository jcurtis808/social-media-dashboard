const darkMode = () => {
  const css = document.getElementById('css');
  const input = document.getElementById('input');
  input.checked ? css.href="light.css"
  : css.href="dark.css";
}

const slider = document.getElementById('slider');
slider.addEventListener('click', darkMode);
