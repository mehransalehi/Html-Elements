const body = document.querySelector('body');
    const text = document.querySelector('.text');
    const textRec = text.getBoundingClientRect();
    const x = document.querySelector('#x');
    const y = document.querySelector('#y');
    const tiltDeg = 50;
    const gap = 0.2;
    let mouseFreez = true;

    const textPos = {
      x: textRec.left + (textRec.width / 2),
      y: textRec.top + (textRec.height / 2)
    }
    let trX = 0;
    let trY = -30;
    body.addEventListener('mousemove', ({
      clientX,
      clientY
    }) => {
      mouseFreez = false;
      let trX = clientX - textPos.x;
      let trY = clientY - textPos.y;

      trX = trX / 10;
      trY = trY / 10;
      x.innerHTML = trX;
      y.innerHTML = trY;
      text.style.setProperty("--shadow", `
            8px 8px 10px black,
            -8px -8px 10px black,
            ${(trX) * -0.4}px ${(trY) * -0.4}px 0px #EAD196,
            ${(trX) * -0.6}px ${(trY) * -0.6}px 0px #7D0A0A,
            ${(trX) * -0.8}px ${(trY) * -0.8}px 0px #FFB534,
            ${trX * -1}px ${trY * -1}px 0px #365486,
            ${(trX) * -1.2}px ${(trY) * -1.2}px 0px #7FC7D9,
            ${(trX) * -1.4}px ${(trY) * -1.4}px 0px #B80000,
            ${(trX) * -1.6}px ${(trY) * -1.6}px 0px #F0ECE5,
            ${(trX) * -1.8}px ${(trY) * -1.8}px 0px #820300,
            ${(trX) * -2}px ${(trY) * -2}px 0px #F3EDC8,
            ${(trX) * -2.2}px ${(trY) * -2.2}px 0px #BF3131,
            ${(trX) * -2.4}px ${(trY) * -2.4}px 0px #161A30,
            ${(trX) * -2.6}px ${(trY) * -2.6}px 0px #B6BBC4,
            ${(trX) * -2.8}px ${(trY) * -2.8}px 0px #31304D`)
    });