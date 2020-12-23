function myDictionary(){ //create Animal dictionary
    var Animal = {
        Species: "Horse",
        Color: "Spotted",
        Age: "10 years",
        Sound: "Neigh"
    }
    delete Animal.Color; //delete color from the dictionary
    document.getElementById("dictionary").innerHTML = Animal.Color; //attempt to display color
}