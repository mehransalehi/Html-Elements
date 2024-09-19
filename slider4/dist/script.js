let width = 700;
   let items = document.querySelectorAll('.item');
   let cItems = items.length;
   
   let left = document.querySelector('.goleft');
   let right = document.querySelector('.goright');
   let slider = document.querySelector('.slider');



   right.addEventListener('click',e=>{
    slide('right');
   });
   left.addEventListener('click',e=>{
    slide('left');
   });

   
   function slide(side){
    let current = document.querySelector('.current');
    let i = 1;
    for (i = 1; i <= cItems; i++) {
     const item = items[i-1];
     if(item.classList.contains('current')){
      item.classList.remove('current');
      break;
     }
    }
    console.log(i);
    if(side == 'right'){
     let next = document.querySelector(`.item:nth-child(${i+1 > cItems ? 1 : i+1})`);
     slider.style.left = i == cItems ? '0' : `-${width * i}px`;
     next.classList.add('current');
    }else{
     let next = document.querySelector(`.item:nth-child(${i-1 < 1 ? cItems : i-1})`);
     slider.style.left = i == 1 ? `-${width * (cItems - 1)}px` : `-${width * (i-2)}px`;
     next.classList.add('current');
    }


   }