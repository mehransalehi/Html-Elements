let items = document.querySelectorAll('.menu li');
  let indi = document.querySelector('.menu .indicator');
  let cons = document.querySelectorAll('.menu .menu-content');
  let i = 0;
  for (let i = 0; i < items.length; i++) {
   let item = items[i];
   item.addEventListener('mouseenter', (e) => {
    e.preventDefault();
    items.forEach(el => { el.classList.remove('hoverd'); });
    cons.forEach(el => { el.classList.remove('show-content'); });
    indi.style.setProperty('left', `${i * 20}%`);
    cons[i].classList.add('show-content');
    item.classList.add('hoverd');

   });
  }
  document.querySelector('.navbar').addEventListener('mouseleave', () => {
   items.forEach(el => { el.classList.remove('hoverd'); });
   cons.forEach(el => { el.classList.remove('show-content'); });
  });