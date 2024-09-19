let bg = document.querySelector('.bg');
  let nums = document.querySelectorAll('.num');

  let j = 1;
  nums.forEach((num) => {
   let spans = num.querySelectorAll('span');
   num.style.setProperty('--j', j);
   j++;
   let i = 1;
   spans.forEach((span) => {
    span.style.setProperty('--i', i);
    i++;
   })
  })

  //make background tiles
  for (let i = 1; i <= 225; i++) {
   let tile = document.createElement('div');
   tile.classList.add('tile');
   tile.style.setProperty('--i', i);
   tile.style.setProperty('--odd', i % 2 == 0 ? '400deg' : '300deg');
   tile.style.setProperty('--ev', i % 2 == 0 ? '300deg' : '400deg');
   bg.appendChild(tile);
  }