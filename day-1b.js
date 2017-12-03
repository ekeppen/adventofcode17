function captchaCracker() {

	var el = document.getElementById('input'); //Variable containing input element reference
	var captchaInput = el.textContent; //Variable containing puzzle input
	var captchaLength = captchaInput.length; //Variable containing the length of the input
	var offset = captchaLength/2; //Variable containing the offset length
	var captchaAnswer = 0; //Variable containing captcha answer

	//Appends a copy of the first half of the captcha to the end, making the list circular
	captchaInput += captchaInput.substring(0,offset);

	for (i = 0; i < captchaLength; i++) {

		//Checks if the number is = to the number offset spaces ahead and adds it to running sum
		if (captchaInput[i] == captchaInput[i + offset]) {
			captchaAnswer += Number(captchaInput[i]);
		}
	}

	return captchaAnswer;
}

//Variable containing answer element reference
var answer = document.getElementById('answer');

//Changes the answer element to captcha answer
answer.textContent = captchaCracker();
