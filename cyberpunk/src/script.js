let cont = document.querySelector('.container');
  for (let i = 0; i < 500; i++) {
   let elm = document.createElement('div');
   elm.style.setProperty("--i",i);
   elm.classList.add('line');
   cont.append(elm);
  }