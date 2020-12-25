function ConcatString(){ //use the concat() method to concatenate two strings
    var string1 = "Hello ";
    var string2 = "there!"
    document.getElementById("concatExample").innerHTML = string1.concat(string2);
}
function sliceMethod(){ //use the slice method to display a section of the entire phrase
    var sentence = "Kristin likes pasta";
    var section = sentence.slice(0, 7);
    document.getElementById("slice").innerHTML = section;
}
function searchFunction(){ //use the search method to return the location of a word
    var str = "Hello there!";
    document.getElementById("search").innerHTML = str.search("there");
}
function uppercaseFunction(){ //function to display a string in uppercase letter using the toUpperCase method
    var upperStr = "Kristin";
    document.getElementById("uppercase").innerHTML = upperStr.toUpperCase();
}
function stringFunction(){ //function to change a number to a string
    var num = 100;
    document.getElementById("numToString").innerHTML = num.toString();
}
function precisionFunction(){ //function to specify how many digits to make a number
    var num = 100.35;
    document.getElementById("precision").innerHTML = num.toPrecision(3);
}
function fixedNum(){ //function to return a float number to a specified number of digits past the decimal point
    var num = 6.89732;
    document.getElementById("fixed").innerHTML = num.toFixed(2);
}
function ValueOfFunction(){//function to return the primitive value of a string object
    var str = "Hello there";
    document.getElementById("valueOf").innerHTML = str.valueOf();
}