const btn = document.getElementById('continue');
const progressBar = document.querySelector('.container-box__progress-bar');
btn.addEventListener('click', e => {
   let random = Math.floor(Math.random()*(100-10)+10);
   const computedStyle = getComputedStyle(progressBar);
   let width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;   
   if (width) width = 0;
   let timer = setTimeout(f = () => {
      if (width < random){
         width = (width * 10 + 0.1 * 10) / 10;
         progressBar.style.setProperty('--width', width);
         progressBar.dataset.label = `${Math.floor(width)}%`;
         timer = setTimeout(f, 10);
      } else clearTimeout(timer);
   },10);
});