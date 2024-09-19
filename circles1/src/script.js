 const el = document.querySelector(".circles");
    for (let i = 0; i < 50; i++) {
      var names = ['x1', 'x2', 'y1', 'y2'];
      let name = names[Math.floor(Math.random() * names.length)];
      let elm = document.createElement('div');
      let cir = document.createElement('div');
      elm.classList.add('circle-container');
      cir.classList.add('circle');


      elm.style.setProperty('animation', 'z 5s .' + i + 's linear infinite');
      el.appendChild(elm);
      cir.style.setProperty('animation', name + ' 7.5s .' + i + 's linear infinite');
      elm.appendChild(cir);
    }