function captchaCracker() {

	var el = document.getElementById('input'); //Variable containing input element reference
	var captchaInput = el.textContent; //Variable containing puzzle input
	var captchaLength = captchaInput.length; //Variable containing the length of the input
	var captchaAnswer = 0; //Variable containing captcha answer

	for (i = 0; i < captchaLength; i++) {
	
		//Checks if the element is the last in the array	
		if (i == (captchaLength - 1)) {
		
			//Checks if the last element is the same as the first element, and if true, adds it to running sum 
			if (captchaInput[i] == captchaInput[0]) {
				captchaAnswer += Number(captchaInput[i]);
			}
		}
			
		//Checks if an element is the same as the one to its right and adds it to a running sum if it does
		else {
			if (captchaInput[i] == captchaInput[i+1]) {
				captchaAnswer += Number(captchaInput[i]);
			}
		}
	}

	return captchaAnswer;
}

//Variable containing answer element reference
var answer = document.getElementById('answer');

//Changes the answer element to captcha answer
answer.textContent = captchaCracker();
