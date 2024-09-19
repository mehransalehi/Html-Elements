var colorArray = ['#ff4000', '#ff8000', '#ff6f91', '#ffbf00', '#ffff00', 
		  '#bfff00', '#80ff00', '#40ff00', '#00ff00', '#00ff40',
		  '#00ff80', '#00ffbf', '#00ffff', '#00bfff', '#0080ff', 
		  '#0040ff', '#0000ff', '#4000ff', '#8000ff', '#bf00ff',
		  '#ff00ff', '#ff00bf', '#ff0080', '#ff0040', '#ff0000',
    '#ff4000', '#ff8000', '#ff6f91', '#ffbf00', '#ffff00', 
		  '#bfff00', '#80ff00', '#40ff00', '#00ff00', '#00ff40',
		  '#00ff80', '#00ffbf', '#00ffff', '#00bfff', '#0080ff', 
		  '#0040ff', '#0000ff', '#4000ff', '#8000ff', '#bf00ff',
		  '#ff00ff', '#ff00bf', '#ff0080', '#ff0040', '#ff0000'];
  const el = document.querySelector(".container");
  for (let i = 0; i < 50; i++) {
    let elm = document.createElement('div');
    elm.classList.add('cube');
    elm.style.setProperty('--i', i);
    elm.style.setProperty('border-color', colorArray[i]);
    el.appendChild(elm);
  }