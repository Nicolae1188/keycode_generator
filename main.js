function keycode(){
    var code = event.code;
    var key = event.key;
    var which = event.keyCode; 

    document.getElementById("codeP").innerHTML = code;
    document.getElementById("keyP").innerHTML = key;
    document.getElementById("whichP").innerHTML = which;

}

document.addEventListener('keypress',keycode)

