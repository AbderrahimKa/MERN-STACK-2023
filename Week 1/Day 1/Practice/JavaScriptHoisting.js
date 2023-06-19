//Ex 1
console.log(hello);
var hello = 'world';
// How the interpreter see the code 
var hello;
console.log(hello);
hello = 'world';

//----------------------------------------------------------------

//Ex 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// How the interpreter see the code 
var needle;
function test(){
    var needle = 'magnet';
    console.log(needle);
}
needle = 'haystack';
test();

//----------------------------------------------------------------

//Ex 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// How the interpreter see the code 
var brendan;
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
brendan = 'super cool';
console.log(brendan);

//----------------------------------------------------------------

//Ex 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// How the interpreter see the code 
var food;
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
food = 'chicken'
console.log(food);
eat();

//----------------------------------------------------------------

//Ex 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// How the interpreter see the code 
var mean;
var food;
mean();
console.log(food);
mean = function() {
    var food;
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
console.log(food);

//----------------------------------------------------------------

//Ex 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// How the interpreter see the code 
var genre;
console.log(genre);
genre = "disco";
rewind();
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre);

//----------------------------------------------------------------

//Ex 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// How the interpreter see the code 
var dojo;
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);