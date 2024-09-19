let cn = document.querySelector('.container');
    let chs = ['@', '_', 'W', 'E', 'B', 'I', 'O', 'X'];

    for (let i = 0; i < chs.length; i++) {
      let cube = document.createElement('div');
      cube.innerHTML = `
                <div class="top"></div>
                <div class="bot"></div>
                <div class="left"></div>
                <div class="right"></div>
                <div class="back">${chs[chs.length - 1 - i]}</div>
                <div class="forward">${chs[i]}</div>
            `;
      cube.classList.add('cube')
      cube.style.setProperty('--i', i)
      cn.appendChild(cube)

    }