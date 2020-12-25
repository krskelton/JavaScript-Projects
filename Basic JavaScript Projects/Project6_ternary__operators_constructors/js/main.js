function Ride_Function(){ //function to determine if the input is 52 or greater
    var Height, Can_ride;
    Height = document.getElementById("height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = Can_ride + " to ride.";
}
function Vehicle(Make, Model, Year, Color){ //Constructor for a Vehicle
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //create new instance of Vehicle
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); //create new instance of Vehicle
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard"); //create new instance of Vehicle
function myFunction(){ //display information about the Erik instance of the Vehicle class
    document.getElementById("Keywords_and_Contructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}
function Dog(Name, Breed, Color, Age){ //constructor for a Dog class
    this.Dog_Name = Name;
    this.Dog_Breed = Breed;
    this.Dog_Color = Color;
    this.Dog_Age = Age;
}
var Cali = new Dog("Cali", "Great Pyrenees mix", "Sable", "7 month"); //create new instance of Dog
function createDog(){ //display information about the Cali instance of the Dog class
    document.getElementById("new_and_this").innerHTML = Cali.Dog_Name + " is a " + Cali.Dog_Age + " old " + Cali.Dog_Color + " " + Cali.Dog_Breed;
}
function count_Function(){ //nested function that increases a number by 1
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count(){
        var starting_point = 9;
        function Plus_one(){
            starting_point += 1;
        }
        Plus_one();
        return starting_point;
    }
}