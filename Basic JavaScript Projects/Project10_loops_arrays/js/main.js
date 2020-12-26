function Call_Loop(){ //demonstrate a while loop
    var output = "";
    var count = 0;
    while(count <= 10){
        output += "<br>" + count;
        count++;
    }
    document.getElementById("loop").innerHTML = output;
}
function returnStringCharacter(){ //demostrate using character length
    var str = "Kristin Skelton";
    var strLength = str.length;
    document.getElementById("stringLength").innerHTML = strLength;
}
var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //create array
var content = "";
var Y;
function for_Loop(){ //display each element in the array 
    for(Y=0; Y<instruments.length; Y++){
        content += instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = content;
}
function arrayFunction(){ //create and fill an array and display an array element
    var Cat_Picuture = [];
    Cat_Picuture[0] = "sleeping";
    Cat_Picuture[1] = "playing";
    Cat_Picuture[2] = "eating";
    Cat_Picuture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cat_Picuture[2] + ".";

}
function constant_function(){  //create an object
    const Animal_Object = {type:"cat", breed:"Domestic Short Hair", color:"Grey", age: 15};
    document.getElementById("Constant").innerHTML = "My " + Animal_Object.type + " is a " + Animal_Object.color + " " + Animal_Object.breed;
    Animal_Object.color = "Black and White";
    Animal_Object.name = "Bailey";
    document.getElementById("Constant").innerHTML = "My " + Animal_Object.type + " " + Animal_Object.name + " is a " + Animal_Object.color + " " + Animal_Object.breed;
}
function letVariable(){ //use the let keyword to declare a variable
    let x = 7;
    document.getElementById("letVar").innerHTML = x;
}
function returnStatement(){ //use the return statement
    return Math.PI + " was displayed with a return statement.";
}
document.getElementById("returnStatement").innerHTML = returnStatement(); 

function create_Object(){ //create an object and a method within it
    let animal = {
        species: "mouse",
        color: "Brown and White",
        age: "1 year",
        description: function(){
            return "My " + this.age + " " + this.species + " is " + this.color;
        }
    }
    document.getElementById("objectExample").innerHTML = animal.description();
}
function useBreak(){ //demonstrate a break statement
    var text = "";
    var i;
    for (i = 0; i < 10; i++) {
        if (i === 3) { break; }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("breakExample").innerHTML = text;
}
function useContinue(){ //demostrate a continue statement
    var text = "";
    var i;
    for (i = 0; i < 10; i++) {
        if (i === 3) { continue; }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("continueExample").innerHTML = text;
}
