window.onload = function(){
	let box = document.querySelector('.port-section');
	let bul = document.querySelectorAll('.son');
	let img = document.getElementsByTagName('img');
	console.log(img);

	img.onclick = function(e){
		e.preventDefault();
		img.src = this.href;
		bul.classList.add('active');
	}
	bul.onclick = function(){
		if(bul.classList.contains('active')){
			bul.classList.remove('active');
			img.src = '';
		}
	}


	// let flag = true;
	// let imgH,imgW;
	// img.onclick = function(){
	// 	imgH = img.height;
	// 	imgW = img.width;
	// 	if(flag){
	// 		flag = false;
	// 		img.height = imgH*2;
	// 		img.width = imgW*2;
	// 	}else{
	// 		flag = true;
	// 		img.height = imgH/2;
	// 		img.width = imgW/2;
	// 	}
	// }
}
