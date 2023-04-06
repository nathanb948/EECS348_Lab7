function check_pass() {
	var pw1 = document.getElementById("pw1").value;
	var pw2 = document.getElementById("pw2").value;
	
	if (pw1.length < 8) {
	  alert("first password's length is less than 8 letters")
	}
	else if(pw2.length < 8) {
	  alert("second password's length is less than 8 letters")
	}
	else if(pw1 != pw2) {
	  alert("passwords are not the same")
	}
	else {
	  alert("passwords match!")
	}
}
