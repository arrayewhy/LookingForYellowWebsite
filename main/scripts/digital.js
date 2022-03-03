$(document).ready(function(){

	// Show Close Up
	$(".galleryElement > div").click(function(){
		
		// Hide Scrollbar
		$("html").css("overflow", "hidden");

		// Replace Background Image
		var bgImage = $(this).css("background-image");
		bgImage = bgImage.replace('"', "").replace('"', "");
		$(".closeUpContainer > div").css("background-image", bgImage);

		// Replace Background Color
		var bgCol = $(this).css("background-color");
		$(".closeUpContainer").css("background-color", bgCol);

		// Fade In
		$(".closeUpContainer").fadeIn();
	});

});

// Hide Close Up
$(document).keydown(function(e)
{
	var keycode = (e.keyCode ? e.keyCode : e.which);
	if(keycode == '27') // Escape Key
	{
		// Fade Out
		$(".closeUpContainer").fadeOut();

		// Show Scrollbar
		$("html").css("overflow", "visible");
	}
});