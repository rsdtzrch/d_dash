// Click-to-Enlarge Feature for Image
document.getElementById("imageBox").addEventListener("click", function() {
	document.getElementById("imageModal").style.display = "flex";
});
													

document.querySelector(".close").addEventListener("click", function() {
	document.getElementById("imageModal").style.display = "none";
});
													   
																

window.addEventListener("click", function(event) {
	if (event.target === document.getElementById("imageModal")) {
		document.getElementById("imageModal").style.display = "none";	 
	}		   
});

