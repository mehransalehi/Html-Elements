let container = document.querySelector(".container")
        for (let x = 1; x < 6; x++) {
            for (let y = 1; y < 6; y++) {
                for (let z = 1; z < 6; z++) {
                    if(z == 1 || y ==1 || x == 1){
                        let cube = document.createElement('div');
                        cube.classList.add('cube');
                        cube.innerHTML = `
                            <div class="front"></div>
                            <div class="back"></div>
                            <div class="left"></div>
                            <div class="right"></div>
                            <div class="top"></div>
                            <div class="bottom"></div>
                        `;
                        cube.style.setProperty('--x',x);
                        cube.style.setProperty('--y',y);
                        cube.style.setProperty('--z',-1*z);
                        container.prepend(cube);
                    }
                }
            }
        }