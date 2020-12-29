function Color_Function(){
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors){
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
        break;
        default:
            Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

function classExample(){
    var str = document.getElementsByClassName("classExample");
    str[0].innerHTML = "It worked!";
}

function drawCircle(){
    var canvas = document.getElementById("canvasExample");
    var circle = canvas.getContext("2d");
    circle.beginPath();
    circle.arc(95, 50, 40, 0, 2 * Math.PI);
    circle.stroke();
}
function createGradient(){
    var c = document.getElementById("createGradient");
    var ctx = c.getContext("2d");

    var grd = ctx.createLinearGradient(0, 0, 170, 0);
    grd.addColorStop(0, "purple");
    grd.addColorStop(1, "pink");

    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 500, 500);
}
