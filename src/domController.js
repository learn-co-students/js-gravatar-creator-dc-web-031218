function updateDOM(input) {
	console.log("updateDOM(), input: ", input);
	let tempIdenticon = new Identicon(input);
	let identiconDiv = Array.from(document.querySelector('#identicon').children);
	let tempColor = `rgb(${tempIdenticon.color[0]},${tempIdenticon.color[1]},${tempIdenticon.color[2]})`;
	//************* populate matrix **********************
	let divMatrix = [];
	let j = 0;
	for(let i = 0; i < 5; i++){
		let temp = [];
		let tempJ = j+5;
		for(j; j < tempJ; j++){
			temp.push(identiconDiv[j]);
		}
		divMatrix.push(temp);
	}

	//***************Coloring elements of matrix*********
	let hashIterator = 1;
	for(let row = 0; row < 5; row++){
		for(let col = 0; col < 3; col++){
			let tempSquare = divMatrix[row][col];
			let complement = divMatrix[row][4-col];
			let tempVal = tempIdenticon.hashArr[hashIterator];
			if(tempVal % 2 === 1){
				tempSquare.style.backgroundColor = tempColor;
				complement.style.backgroundColor = tempColor;
			}

			hashIterator++;
		}
	}
}

function clearDOM(){
	let identiconDiv = Array.from(document.querySelector('#identicon').children);
	identiconDiv.forEach(div=>{
		div.style.backgroundColor = 'rgb(240, 240, 240)';
	})
}