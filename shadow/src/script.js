const body = document.querySelector('body');
        const text = document.querySelector('.text');
        const textRec = text.getBoundingClientRect();
        const x = document.querySelector('#x');
        const y = document.querySelector('#y');
        const tiltDeg = 50;

        const textPos = {
            x : textRec.left + (textRec.width/2),
            y : textRec.top + (textRec.height/2)
        }

        console.log(textPos)
        body.addEventListener('mousemove', ({
            clientX,
            clientY
        }) => {
            let trX = x.innerHTML = clientX - textPos.x;
            let trY = y.innerHTML = clientY - textPos.y;

            trX = trX/10 > tiltDeg ? tiltDeg : trX/10;
            trY = trY/10 > tiltDeg ? tiltDeg : trY/10;

            text.style.setProperty("--shadow",
            `${trX*-1}px ${trY*-1}px 10px black,${(trX+10)*-1}px ${(trY+10)*-1}px 10px black,${(trX+20)*-1}px ${(trY+20)*-1}px 10px black`)

            text.style.setProperty('--trans',
            `translate(-50%,-50%) skew(${trX}deg`);
        });