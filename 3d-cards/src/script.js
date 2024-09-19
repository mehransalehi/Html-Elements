
    const cards = document.querySelectorAll('.card');
    const tiltDeg = 50;
    cards.forEach(card => {
      let img = card.querySelector('.card-image');
      card.addEventListener('mousemove', ({
        clientX,
        clientY
      }) => {
        const bcr = card.getBoundingClientRect();
        const rotX = ((clientY - bcr.top) / bcr.height * 2 - 1) * tiltDeg;
        const rotY = ((clientX - bcr.left) / bcr.width * 2 - 1) * -tiltDeg;
        img.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      });
      card.addEventListener('mouseleave', () => {
        img.style.transform = `rotateX(0deg) rotateY(0deg)`;
      });
    });