var Person = function(name) {
	this.name = name;
};

Person.prototype.display = function(greeting)
{
	console.log(greeting + "" + this.name);
};

var new_person = new Person("Alex");
new_person.name //returns Alex
new_person.display("Good evening"); //Good evening Alex

//Enum data types, caps that defines state of player, usually in array

var allEnemies = [new Enemy(), new Enemy(), new Enemy(),];

//Don't need to edit html or css to pass

//For location, defined object, row 1 is this y coordinate, row 2 is this y coordinate. My player is on row 1, my bugs are one row 1. Then can work on collisons. Maybe 73px for size of characters.

//https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
//Axis-Aligned Bounding Box
//One of the simpler forms of collision detection is between two rectangles that are axis aligned — meaning no rotation. The algorithm works by ensuring there is no gap between any of the 4 sides of the rectangles. Any gap means a collision does not exist.

var rect1 = {x: 5, y: 5, width: 50, height: 50}
var rect2 = {x: 20, y: 10, width: 10, height: 10}

if (rect1.x < rect2.x + rect2.width &&
   rect1.x + rect1.width > rect2.x &&
   rect1.y < rect2.y + rect2.height &&
   rect1.height + rect1.y > rect2.y) {
    // collision detected!
}

// filling in the values =>

if (5 < 30 &&
    55 > 20 &&
    5 < 20 &&
    55 > 10) {
    // collision detected!
}