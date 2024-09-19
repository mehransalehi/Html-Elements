let cards = document.querySelectorAll(".card");
 let closes = document.querySelectorAll(".card .close");

 cards.forEach((card)=>{
  card.style.left = card.offsetLeft-10+"px";
  card.style.top = card.offsetTop-5+"px";
  card.addEventListener('click', e => {
   let parent = card.parentElement;
   card.classList.add('active');
   cards.forEach(e=>{
    if(!e.isEqualNode(card)){
     e.classList.add('not-active');
     e.classList.remove('active');
    }
   });
  });
 });

 closes.forEach((close)=>{
  close.addEventListener('click', e => {
   e.stopPropagation();
   let parent = close.closest('.card');
   if(parent.classList.contains('active')){
    cards.forEach(e=>{
      e.classList.remove('not-active');
      e.classList.remove('active');
    });
   }
  });
 });