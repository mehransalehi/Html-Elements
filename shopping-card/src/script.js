let checks = document.querySelectorAll(".card-container .icon");
  checks.forEach((elm)=>{
   elm.addEventListener('click', e => {
    elm.parentElement.classList.toggle('checked');
   })
  });