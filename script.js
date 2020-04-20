var color1 = document.querySelector('.c1');
var color2 = document.querySelector('.c2');
var body = document.querySelector('body');
var css = document.querySelector('h3');
var btnadd =document.querySelector('.addcolor');
var btnremove= document.querySelector('.removecolor');
var input = document.querySelector('.colorinput');

function gradient() {
	body.style.background = "linear-gradient(to right ,"+ color1.value + "," + color2.value +" )";
	css.textContent = body.style.background + ';'
}
/*function gradient3color() {
	body.style.background = "linear-gradient(to right ,"+ color1.value + "," + color2.value + ','+ color3.value+ " )";
	css.textContent = body.style.background + ';'
}*/


color1.addEventListener("input" , gradient);
color2.addEventListener("input" , gradient);


/*btnadd.addEventListener('click', function newcolor(){
	var color3 = document.createElement('input');
	color3.classList.add('inputbtn')
	color3.setAttribute('type', 'color');
	input.appendChild(color3);
	return true;

})*/



