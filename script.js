let id = (id) => document.getElementById(id);

function validateNameInput(getId) {
	let name = id(getId);
	if (name.value.trim() == "" || /^[A-Za-z- ]*$/.test(name.value.trim()) == false) {
		name.style.backgroundColor = "#f66b6f";
		return false;
	}
	else {
		name.style.backgroundColor = "white";
	}
	return true;
}


function validatePwd(getId) { 
	let pwd = id(getId);
	if (pwd.value.trim() == "" || /^[A-Za-z0-9!@#$%^&*()_+-=]*$/.test(pwd.value.trim()) == false) {
		pwd.style.backgroundColor = "#f66b6f";
		return false;
	}
	else {
		pwd.style.backgroundColor = "white";
	}
	return true;
}

function validateEmail(getId) {
	let email = id(getId);
	if(email.value.trim() == "" || /^[A-Za-z0-9_\.]*@[A-Za-z0-9_\.]*\.[A-Za-z0-9_\.]*$/.test(email.value.trim()) == false) {
		email.style.backgroundColor = "#f66b6f";
		return false;
	}
	else {
		email.style.backgroundColor = "white";
	}
	return true;
}

function validatePhone(getId) {
	let phone = id(getId);
	if(phone.value.trim() == "" || /^\(\+[0-9]{2}\)[0-9]{9}$/.test(phone.value.trim()) == false) {
		phone.style.backgroundColor = "#f66b6f";
		return false;
	}
	else {
		phone.style.backgroundColor = "white";
	}
	return true;
}

function validateDate(getId, format) {
	let date = id(getId);
	if (format != "zz/ll/aaaa" && format != "ll/zz/aaaa" && format != "zz/ll/aa") {
		alert("internal error, wrong date validation format");
		return false;
	}
	let days31 = [1, 3, 5, 7, 8, 10, 12];
	if (format == "zz/ll/aaaa") {
		let d = date.value.split("/");
		if (d.length != 3) {
			date.style.backgroundColor = "#f66b6f";
			return false;
		}
		let day = parseInt(d[0]);
		let month = parseInt(d[1]);
		let year = parseInt(d[2]);
		if (isNaN(day) || isNaN(month) || isNaN(year)) {
			date.style.backgroundColor = "#f66b6f";
			return false;
		}
		if(parseFloat(d[0]) != day || parseFloat(d[1]) != month || parseFloat(d[2]) != year) {
			date.style.backgroundColor = "#f66b6f";
			return false;
		}
		let longerYear = false;
		if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
			longerYear = true;
		}
		if ((day > 28 && month == 2 && !longerYear) || (day > 29 && month == 2 && longerYear)) {
			date.style.backgroundColor = "#f66b6f";
			return false;
		}
		if (day > 31 || month > 12 || year < 1000 || month < 1 || day < 1) {
			date.style.backgroundColor = "#f66b6f";
			return false;
		}
		if (day > 30 && !days31.includes(month)) {
			date.style.backgroundColor = "#f66b6f";
			return false;
		}
		date.style.backgroundColor = "white";
	}

	if (format == "ll/zz/aaaa") {
		let d = date.split("/");
		if (d.length != 3) {
			date.style.backgroundColor = "#f66b6f";
			return false;
		}
		let day = parseInt(d[1]);
		let month = parseInt(d[0]);
		let year = parseInt(d[2]);
		if (isNaN(day) || isNaN(month) || isNaN(year)) {
			date.style.backgroundColor = "#f66b6f";
			return false;
		}
		if(parseFloat(d[1]) != day || parseFloat(d[0]) != month || parseFloat(d[2]) != year) {
			date.style.backgroundColor = "#f66b6f";
			return false;
		}
		let longerYear = false;
		if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
			longerYear = true;
		}
		if ((day > 28 && month == 2 && !longerYear) || (day > 29 && month == 2 && longerYear)) {
			date.style.backgroundColor = "#f66b6f";
			return false;
		}
		if (day > 31 || month > 12 || year < 0 || month < 1 || day < 1 || year > 99) {
			date.style.backgroundColor = "#f66b6f";
			return false;
		}
		if (day > 30 && !days31.includes(month)) {
			date.style.backgroundColor = "#f66b6f";
			return false;
		}
		date.style.backgroundColor = "white";
	}

	if (format == "zz/ll/aa") {
		let d = date.split("/");
		if (d.length != 3) {
			date.style.backgroundColor = "#f66b6f";
			return false;
		}
		let day = parseInt(d[0]);
		let month = parseInt(d[1]);
		let year = parseInt(d[2]);
		if (isNaN(day) || isNaN(month) || isNaN(year)) {
			date.style.backgroundColor = "#f66b6f";
			return false;
		}
		if(parseFloat(d[0]) != day || parseFloat(d[1]) != month || parseFloat(d[2]) != year) {
			date.style.backgroundColor = "#f66b6f";
			return false;
		}
		let longerYear = false;
		if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
			longerYear = true;
		}
		if ((day > 28 && month == 2 && !longerYear) || (day > 29 && month == 2 && longerYear)) {
			date.style.backgroundColor = "#f66b6f";
			return false;
		}
		if (day > 31 || month > 12 || year < 1000 || month < 1 || day < 1) {
			date.style.backgroundColor = "#f66b6f";
			return false;
		}
		if (day > 30 && !days31.includes(month)) {
			date.style.backgroundColor = "#f66b6f";
			return false;
		}
		date.style.backgroundColor = "white";
	}

	return true;
}

function generateCities() {
	let selected = id('country');
	if(selected.value == "Romania") {
		const list = document.getElementById('cities'); 
		list.innerHTML = "";
        ['Cluj-Napoca', 'Brasov'].forEach(item => {
          let option = document.createElement('option');
          option.value = item;   
          list.appendChild(option);
        });
	}
	if(selected.value == "USA") {
		const list = document.getElementById('cities'); 
		list.innerHTML = "";
        ['New York', 'Chicago'].forEach(item => {
          let option = document.createElement('option');
          option.value = item;   
          list.appendChild(option);
        });
	}
}
