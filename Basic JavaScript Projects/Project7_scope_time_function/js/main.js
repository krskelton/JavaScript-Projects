var GlobalVariable = 20; //declare a global variable
function localVariableFunction(){ //declare and console.log a local variable
    var LocalVariable = 30;
    console.log(LocalVariable + 100);
}
function errorTesting(){ //demonstrate that you cannot access the local variable from the localVariableFunction function above
    console.log(LocalVariable + 10);
}
localVariableFunction();//call the method
errorTesting(); //call the method

function ConditionalStatement(){ //function to check the current time and display a message based on the returned value
    var time = new Date().getHours();
    if(time < 12){
        document.getElementById("conditionalExample").innerHTML = "Good morning!";
    }
    else if(time = 12){
        document.getElementById("conditionalExample").innerHTML = "Time for lunch!";
    }
    else {
        document.getElementById("conditionalExample").innerHTML = "Good afternoon!";
    }
}

function Check_age(){ //function to determine if the input is greater than or equal to 18
    var Age;
    Age = document.getElementById("age").value;
    if(Age >= 18){
        document.getElementById("movieAccess").innerHTML = "You are 18 or over and can see the Rated R movie";
    } else{
        document.getElementById("movieAccess").innerHTML = "You are not 18 or over and cannot see the Rated R movie";
    }
}

function Time_function(){ //function to determine the time of day output a message based on teh time. Note, I already did a function similar to this one above but the assignment was to copy this one exactly so I added it again. :)
    var Time = new Date().getHours();
    var Reply;
    if(Time < 12 == Time > 0){
        Reply = "It is morning time!";
    }
    else if(Time > 12 == Time < 10){
        Reply = "It is the afternoon";
    }
    else{
        Reply = "It is the evening time";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}