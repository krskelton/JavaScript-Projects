document.write(typeof "Hello"); //display the type

function infinity_number(){ //display a positive infinity
    document.getElementById("infinityNumber").innerHTML = 2E310;
}
function negative_infinity_number(){ //display a negative infinity
    document.getElementById("negInfinityNumber").innerHTML = -3E310;
}
function boolean_number(){ //determine if an expression is true or false
    document.getElementById("boolNum").innerHTML = (10>2);
}
console.log(2+2); //use the console.log method to display the answer
function demonstrate_type_coercion(){ //add a string to a number with type coercion
    document.getElementById("typedem").innerHTML = "10" + 5;
}
function demonstrate_true_boolean(){ //determine if an expression is true or false
    document.getElementById("boolTrue").innerHTML = (10 == 10);
}
function demonstrate_false_boolean(){ //determine if an expression is true of false
    document.getElementById("boolFalse").innerHTML = (10 == 5);
}
function demonstrate_triple_true(){ //demostrate how the triple equals checks for the value and the type
    x = "4";
    y = "4";
    document.getElementById("tripleTrue").innerHTML = (x === y);
}
function demonstrate_triple_false1(){ //demostrate how the triple equals checks for the value and the type
    x = "4";
    y = 5;
    document.getElementById("tripleFalse1").innerHTML = (x === y);
}
function demonstrate_triple_false2(){ //demostrate how the triple equals checks for the value and the type
    x = "4";
    y = 4;
    document.getElementById("tripleFalse2").innerHTML = (x === y);
}
function demonstrate_triple_false3(){ //demostrate how the triple equals checks for the value and the type
    x = "4";
    y = "5";
    document.getElementById("tripleFalse3").innerHTML = (x === y);
}
function demonstrate_OR_operator(){ //check if two expressions are equal with the OR operator
    document.getElementById("orOperator").innerHTML = (5 == 5 || 4 > 5);
}
function demonstrate_AND_operator(){ //check if two expressions are equal with the AND operator
    document.getElementById("andOperator").innerHTML = (5 == 5 && 4 > 5);
}
function demonstrate_NOT_operator(){ //use the NOT operator to return true or false
    document.getElementById("notOperator").innerHTML = !(5 == 5);
}
function demonstrate_NOT_operator2(){ //use the NOT operator to return true or false
    document.getElementById("notOperator2").innerHTML = !(5 == 4);
}