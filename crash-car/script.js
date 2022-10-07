var car;

window.onload = start;

function start(){

car = document.getElementById("car");

} 

document.onkeydown = checkKey;

function checkKey(e) {

    var left = window.getComputedStyle(car,null).getPropertyValue("left");
    var bottom = window.getComputedStyle(car,null).getPropertyValue("bottom");
    
    left = parseFloat(left);
    bottom = parseFloat(bottom);

    e = e || window.event;

    if (e.keyCode == '38') {
    	// up arrow
    	car.style.setProperty("bottom",  (bottom + 10).toString() + "px");
    	
    }
    else if (e.keyCode == '40') {
        // down arrow
        car.style.setProperty("bottom",  (bottom - 10).toString() + "px");
    }
    else if (e.keyCode == '37') {
       // left arrow
       car.style.setProperty("left",  (left - 10).toString() + "px");
    }
    else if (e.keyCode == '39') {
       // right arrow
       car.style.setProperty("left",  (left + 10).toString() + "px");
    }

}
