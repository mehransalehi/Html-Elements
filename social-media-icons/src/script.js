let btn = document.querySelector(".main .text");
  let icon = document.querySelector(".main .text>i");
  btn.addEventListener('click', e => {
   if(btn.parentElement.classList.contains('clicked')){
    //share
    icon.classList.replace('fa-xmark','fa-share-nodes');
   }else{
    //close
    icon.classList.replace('fa-share-nodes','fa-xmark');
   }
   btn.parentElement.classList.toggle('clicked');
  });