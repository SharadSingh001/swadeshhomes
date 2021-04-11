/**
Random functionality
*/

function getInfo(){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var message = document.getElementById("message").value;

	console.log(name);
	console.log(email);
	console.log(phone);
	console.log(message);

	var link = "mailto:rishisingh@gmail.com"
             + "?cc=sharadsingh001@yahoo.com"
             + "&subject=" + encodeURIComponent("Swadesh Homes Contact Request")
             + "&body=" + encodeURIComponent(name + "\n" + email + "\n" + phone + "\n\n" + message)
    ;
    
    window.location.href = link;
}