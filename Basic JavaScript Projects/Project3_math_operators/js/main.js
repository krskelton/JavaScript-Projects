function Add_Numbers(){ //add two numbers
    var addition = 6 + 2;
    document.getElementById("Math").innerHTML = "6 + 2 = " + addition;
}
function Subtract_Numbers(){ //subtract two number
    var subtraction = 6 - 2;
    document.getElementById("Subtract").innerHTML = "6 - 2 = " + subtraction;
}
function Multiply_Numbers(){ //multiply two numbers
    var multiplication = 6 * 2;
    document.getElementById("Multiply").innerHTML = "6 * 2 = " + multiplication;
}
function Divide_Numbers(){ //divide two numbers
    var division = 6 / 2;
    document.getElementById("Divide").innerHTML = "6 / 2 = " + division;
}
function Complex_Numbers(){ //perform a complex math calculation
    var complex = (6 / 2) * 12 + 2;
    document.getElementById("Complex").innerHTML = "(6 / 2) * 12 + 2 = " + complex;
}
function Remainder_Numbers(){ //get the remainder
    var remainder = 25 % 6;
    document.getElementById("Remainder").innerHTML = "When you divide 25 by 6 you have a remainder of " + remainder;
}
function Negation_Operator(){ //use the negation operator
    var result = 10;
    document.getElementById("Negation").innerHTML = "The opposite of " + result + " is " + -result;
}
function Decrement_Operator(){ //decrease a number by 1
    var value = 10;
    value--;
    document.write(value);
}
function Increment_Operator(){ //increase a number by 1
    var value = 10;
    value++;
    document.write(value);
}

function Random_Number(){ //output a random number between 0 and 100
    document.getElementById("randomNum").innerHTML = (Math.random() *100);
}
function Round_Number(){ //round a number to the nearest integer
    document.getElementById("Round").innerHTML = Math.round(10.2);
}