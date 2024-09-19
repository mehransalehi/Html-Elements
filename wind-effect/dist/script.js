let bg = document.querySelector('.bg');
  let min = 1 , max = 10;
  for (let i = 0; i < 40; i++) {
   let rnd = Math.floor(Math.random() * (max - min + 1)) + min;
   let tile = document.createElement('div');
   tile.style.setProperty('--rnd',rnd);
   bg.append(tile);
  }