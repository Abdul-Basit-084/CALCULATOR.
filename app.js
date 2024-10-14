var screenDiv = document.getElementsByClassName("screen")[0];
function getValue(value) {
if (screenDiv) {
switch (value) {
case '=':
if (screenDiv.innerText) {
var result = eval(screenDiv.innerText);
screenDiv.innerText = result;
} 
break;
case 'C':
screenDiv.innerText = ""
case 'Del':
screenDiv.innerText = screenDiv.innerText.slice(0,screenDiv.innerText.length - 1);
break;
default:
screenDiv.innerText += value;
}
}
}