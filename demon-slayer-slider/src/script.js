let parent = document.querySelector('.slider');
  let slides = document.querySelectorAll('.slide');
  let btnNext = document.querySelector('.btn-next');
  let btnPre = document.querySelector('.btn-pre');

  let currentIndex = 1;


  btnNext.addEventListener('click',()=>{
   slide('next');
  });
  btnPre.addEventListener('click',()=>{
   slide('pre');
  });


  function slide(side){
   let currentSlide = slides[currentIndex-1];
   if(side == 'next'){
    currentIndex = currentIndex + 1 > slides.length ? 1 : currentIndex + 1;
   }else{
    currentIndex = currentIndex - 1 < 1  ? slides.length : currentIndex - 1;
   }

   currentSlide.classList.remove('show');
   setTimeout(() => {
    slides[currentIndex-1].classList.add('show');
   }, 500);
  }