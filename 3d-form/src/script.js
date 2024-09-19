
		let sides = document.querySelectorAll('.panel-side');

		sides.forEach((side)=>{
			side.addEventListener('click',()=>{
				
				side.parentElement.classList.toggle('open');
			});
		});