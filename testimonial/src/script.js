let avatars = document.querySelectorAll('.avatars_person');

    avatars.forEach((av) => {
      av.addEventListener('click', (e) => {
        avatars.forEach((ava) => {
          if (ava.classList.contains('active')) {
            ava.classList.remove('active');
            console.log(ava.getAttribute('data-info'));
            let info = document.querySelector(ava.getAttribute('data-info'));
            info.classList.remove('active');
          }
        })
        av.classList.add('active');
        let info = document.querySelector(av.getAttribute('data-info'));
        info.classList.add('active');
        let container = av.closest('.avatars');

        let dist = av.getBoundingClientRect().left - container.getBoundingClientRect().left;
        dist -= 30;
        dist = dist >= 0 ? '-' + dist : dist;
        av.style.setProperty('--xtrans', `${dist}px`);
      });
    });