var Skill = document.getElementById('slideshow');

var skillArray = new Array("images/csharp.png","images/css.png","images/jscript.png");
var skillNumber = 0;
var skillArrayLength = skillArray.length - 1;

function switchImage()
{
	slideshow.setAttribute("src", skillArray[skillNumber]);
	skillNumber++;

	if(skillNumber > skillArrayLength)
	{
		skillNumber = 0;
	}
}

var intervalHandle = window.setInterval(switchImage, 3000);