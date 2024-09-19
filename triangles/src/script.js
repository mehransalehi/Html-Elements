
    let cn = document.querySelector('.container');

    for (let i = 0; i < 30; i++) {
      let tri = document.createElement('div');
      tri.innerHTML = '<span></span>';
      tri.classList.add('triangle');
      tri.style.setProperty('--i', i);
      cn.appendChild(tri);
    }