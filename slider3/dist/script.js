let leftA = document.querySelector('.left-arrow');
  let rightA = document.querySelector('.right-arrow');

  leftA.addEventListener('click', e => {
   let middleCard = document.querySelector('.card.middle');
   let leftCard = document.querySelector('.card.left');
   let rightCard = document.querySelector('.card.right');


   let middleBg = document.querySelector('.bg.bg-middle');
   let leftBg = document.querySelector('.bg.bg-left');
   let rightBg = document.querySelector('.bg.bg-right');


   leftCard.classList.replace('left', 'right');
   middleCard.classList.replace('middle', 'left');
   rightCard.classList.replace('right', 'middle');

   leftBg.classList.replace('bg-left', 'bg-right');
   middleBg.classList.replace('bg-middle', 'bg-left');
   rightBg.classList.replace('bg-right', 'bg-middle');

  });

  rightA.addEventListener('click', e => {
   let middleCard = document.querySelector('.card.middle');
   let leftCard = document.querySelector('.card.left');
   let rightCard = document.querySelector('.card.right');

   let middleBg = document.querySelector('.bg.bg-middle');
   let leftBg = document.querySelector('.bg.bg-left');
   let rightBg = document.querySelector('.bg.bg-right');

   leftCard.classList.replace('left', 'middle');
   middleCard.classList.replace('middle', 'right');
   rightCard.classList.replace('right', 'left');

   leftBg.classList.replace('bg-left', 'bg-middle');
   middleBg.classList.replace('bg-middle', 'bg-right');
   rightBg.classList.replace('bg-right', 'bg-left');
  });