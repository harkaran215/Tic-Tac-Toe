var click=0
var dict = {} 
var win = false;

function getValue(id){

	if(win == false){ 
		var b = '';
		check = checkEmpty(id);
		if (check===true){
			if(click%2===0){
				document.getElementById(id).innerHTML="X";
				b= document.getElementById(id).innerHTML; 
				click +=1;
			}
			else{
				document.getElementById(id).innerHTML="0";
				b= document.getElementById(id).innerHTML;
				click +=1;
			} 
				dict [id]=b;
		}
		else{
			alert("Try again");
		}
	win = checkWinState (dict, b)
	}
}

function checkWinState (dict,b){

	if (dict["b1"]===b&& dict["b2"]===b&& dict["b3" ] === b){
		endGame (b) 
		return true;
	}	
	if (dict["b4"]===b&& dict["b5"]===b&& dict["b6"] ===b){
		endGame (b) 
		return true;
	}
	if (dict["b7"]===b&& dict["b8"]===b&& dict["b9"] === b){
		endGame (b) 
		return true;
	}
	if (dict["b1"]===b&& dict["b4"]===b&& dict["b7"]=== b){
		endGame (b) 
		return true;
	}
	if (dict["b2"]===b&& dict["b5"]===b&& dict["b8"] === b){
			endGame (b) 
			return true;
		}
	if (dict["b3"]===b&& dict["b6"]===b&& dict["b9"]=== b){
			endGame (b) 
			return true;
		}
	if (dict["b1"]===b&& dict["b5"]===b&&dict["b9"]=== b){
			endGame (b) 
			return true;
		}
	if (dict["b3"]===b&& dict["b5"]===b&& dict["b7"]=== b){
			endGame (b) 
			return true;
		}

	return false;

}

function checkEmpty(id) {

	if (document.getElementById(id).innerHTML ==='')
		return true;
	
	return false;
}

function endGame (b){

	swal({
		title: b+' has Won', 
		text: 'Want to Play Again', 
		buttons: {
			'Yes': {
			value: 1,
			}, 
			'No' : {
			 value: 2,
			},
		},
	})
	.then( value  => { 
		switch (value) {
		case 1:
			location.reload(); 
			break;
		case 2:
			swal("Loading Home Page") 
			break;
		default:
			swal("Diconnected.");
		}
	});
}