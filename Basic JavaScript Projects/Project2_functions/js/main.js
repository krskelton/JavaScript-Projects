function Change_Color(){
    var str = "This paragraph "; //declare a string variable
    str+= "is now red!"; //concatenate more text onto the string variable
    var result = str.fontcolor("red"); //change the font color of str and store into a result variable
    document.getElementById("Red_Text").innerHTML = result; //get the element by the ID Red_Text and change the html to the result
}