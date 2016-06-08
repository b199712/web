function mouseover(ID)
{
	/*var choice,choice1,choice2,choice3,choice4,name;

	choice = document.getElementById(ID);
	choice1 = document.getElementById("choice1");
	choice2 = document.getElementById("choice2");
	choice3 = document.getElementById("choice3");
	choice4 = document.getElementById("choice4");

	choice1.style.backgroundColor = "#FFF";
	choice2.style.backgroundColor = "#FFF";
	choice3.style.backgroundColor = "#FFF";
	choice4.style.backgroundColor = "#FFF";
	choice.style.backgroundColor = "#000";*/
}
	
function change(contentID)
{
	var ID,c1_1,c1_2,c2,home;

	home = document.getElementById("home");
	c1_1 = document.getElementById("C1_1");
	c1_2 = document.getElementById("C1_2");
	c2 = document.getElementById("C2");
	ID = document.getElementById(contentID);
console.log(ID);
	home.style.display = "none";
	c1_1.style.display = "none";
	c1_2.style.display = "none";
	c2.style.display = "none";
	ID.style.display = "inline";
}

function changePage(page){

	console.log(page);
	var displayPage, pageName;
	
	pageName=page+".html";
	console.log(pageName);
	displayPage=document.getElementById("displayPage");
	console.log(displayPage.src);
	displayPage.src=pageName;
}