let btn = document.querySelector("button");
  let container = document.querySelector(".container");

  btn.addEventListener('click', e => {

    let active = container.querySelector('.active');
    active.classList.remove('active');

    setTimeout(() => {
      active.classList.add("exit");
      setTimeout(() => {
        let last = container.firstElementChild;
        last.remove();
        container.appendChild(last);
        let triangles = document.querySelectorAll('.triangle');
        triangles[1].classList.add("active")
        setTimeout(() => {
          active.classList.remove("exit")
        }, 500);
      }, 500);
    }, 500);

  })