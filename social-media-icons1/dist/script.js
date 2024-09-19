let items = document.querySelectorAll('.item');

    items.forEach(item => {
      let open = item.querySelector('.open-icon');
      item.addEventListener("click", (e) => {
        if (item.classList.contains('open')) {
          item.classList.replace('open', 'close');
        }
      })
      open.addEventListener("click", (e) => {
        e.stopPropagation();
        let item = open.closest(".item");
        item.classList.remove("close");
        item.classList.add("open");
      })
    })