function cekform(){
	nama = document.getElementById("nama");
	email = document.getElementById("email");
	pesan = document.getElementById("pesan");

	if (nama.value == ""){
		alert("nama harus diisi");
		nama.focus();
		return false;

	}else if (nama.value.length <= 3) {
		alert("nama harus lebih dari 3 karakter");
		nama.focus();
		return false;

	}else if(email.value == "") {
		alert("email harus diisi");
		email.focus();
		return false;

	}else if(pesan.value == "") {
		alert("pesan harus diisi");
		pesan.focus();
		return false;

	}else {
		alert("terimakasih, anda telah mengirimkan pesan")
		return true;

	}
}

a="./assets/image/foto1.jpg";
b="./assets/image/foto.jpg";
                
                
function foto1(){
	document.getElementById("ganti").src=a
}
                
function foto2(){
	document.getElementById("ganti").src=b
}
