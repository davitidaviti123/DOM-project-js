const Me = {
    firstName: "Davit",
    lastName: "meparishvili",
    age: 12,
    fullName : function() {
        return this.firstName + " " + this.lastName
    }}
const car = {
    name: "Mercedes",
    model: "c300",
    weight: "1250kg",
    engine: "electric engine",
    Engine : function() {
        return engine 
    }
};
document.getElementById('nameform').onsubmit = function(event) {
    event.preventDefault();
    var name = document.getElementById('p1').value;
    var lastName = document.getElementById('p2').value;
    var age = document.getElementById('p3').value
    console.log(name);
    console.log(lastName);
    console.log(age);
}
const teacher = {
    name: "luka",
    lastname: "cxvaradze",
    age: "16"
}
const movement = {
    moveForward : function(){
        console.log("moving forward")
    },

    moveBack : function(){
        console.log("moving back")
    },
    moveLeft : function(){
        console.log("moving left")
    },
    moveRight : function(){
        console.log('moving right')
    }
}
