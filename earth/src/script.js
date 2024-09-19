let body = document.getElementsByTagName('body')[0];
		console.log(screen.width)
		for (i = 0; i <= 400; i++) {
			let star = document.createElement('div');
			star.classList.add('star');
			star.style.top = Math.floor(Math.random() * 2000) + 'px';
			console.log(Math.floor(Math.random() * 500));
			star.style.left = Math.floor(Math.random() * screen.width) + 'px';
			body.appendChild(star);
    }