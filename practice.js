//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

  //Code here
var me = {
  name: "Keller",
  age: 26
}

console.log(me.name)


//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

  //Code here
var favoriteThings = {
  band: "Common Kings",
  food: "Koko rice",
  person: "Wife",
  book: "House of the Scorpion",
  movie: "Star Wars",
  holiday: "Christmas"
}

//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

  //Code here
favoriteThings.car = "Honda";
favoriteThings.brand = "Accord";

//Now change the value of the food key in your favoriteThings object to be 'Chicken Nuggets' and change the value of the book key in your favoriteThings object to be 'Harry Potter'.

  //Code here
favoriteThings.food = "Chicken Nuggets";
favoriteThings.book = "Harry Potter";


//NEXT PROBLEM



/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

var backPack = {

}
var item = 'firstPocket';
backPack[item] = 'chapstick';
backPack.color = 'Navy Blue';
  //Code here

//After you do the above, alert your entire backPack object.

  //Code here
alert(backPack);
/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

  //Code here
console.log(backPack);



//NEXT PROBLEM




//Create an 'alsoMe' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

 
  //Code Here
var alsoMe = {
   name: "Keller",
   age: 26,
   height: "6 ft",
   gender: "Male",
   married: "Yes",
   eyeColor: "Brown",
   hairColor: "Black"
 }
//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

  //Code Here
for(prop in alsoMe){
  alert(prop + ': ' + alsoMe[prop])
};



//NEXT PROBLEM




//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

 var album = {
   shining: 3.12,
   star: 4.22,
   yours: 3.33,
   Us: 2.59,
   Why: 5.00
 }
  //Code Here

//Now, loop through your album object alerting every song title individually.

  //Code Here
for(prop in album){
  alert(prop + ': ' + album[prop])
};



//NEXT PROBLEM




//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

var states = {
  Colorado: 30000,
  Utah: 27500,
  Arizona: 28000,
  California: 40000,
  Wyoming: 8000
}
  //Code Here

//Now, loop through your states object and if the states population is greater than 30K, alert that state.

 for ( var state in states) {
  if (states[state] > 30000) {
     alert(state);
   }
 }
  //Code Here




//NEXT PROBLEM




var user1 = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */

 for(prop in user1){
   if(!user1[prop]){
     delete user1[prop]
   }
 }
  //Code Here

//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

user1.name = 'Keller Johnson';
user1.username = 'kelljohnson1';
  //Code Here




//NEXT PROBLEM




var user2 = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayEmail: function(){
            alert('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

 user2.name = 'Tyler S. McGinnis';
 user2.email = 'tyler.mcginnis@devmounta.in';
 //Code Here

//Now call the sayEmail method that's on the user object which will alert the users email

  user2.sayEmail();
  //Code Here




//NEXT PROBLEM




//Create an empty object called methodCollection.

  var methodCollection = {

  }
  //Code Here

/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

methodCollection.alertHello = function(){
  alert('hello');
}  
methodCollection.logHello = function(){
  console.log('hello');
}
  //Code Here

//Now call your alertHello and logHello methods.

  alert.alertHello();
  alert.logHello();
  //Code Here



//NEXT PROBLEM



// Create a function called makePerson which takes in name, birthday, ssn as its
// parameters and returns a new object with all of the information that you passed in.

  function makePerson(name, birthday, ssn){
    return{
      name: name,
      birthday: birthday,
      ssn: ssn
    }
  }
  //Code Here



//NEXT PROBLEM



// Create a function called makeCard which takes in cardNumber, expirationDate, and securityCode to make a Credit Card object and returns that object so that whenever you invoke makeCard, you get a brand new credit card.

  function makeCard(cardNumber, expirationDate, securityCode){
    return{
      cardNumber: 1234567890,
      expirationDate: 12-12-19,
      securityCode: 345
    }
  }
  //Code Here



//NEXT PROBLEM



/* As of this point you should have a makePerson and a makeCard function which returns you either a person or a credit card object.
   Now, create a bindCard function that takes in a person object as its first parameter and a creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains all the properties from the person as well as the creditcard. While Object.assign would give you the answer, specRunner requires an answer without using it.
*/

  function bindCard(person, card){
    var newCard = {};
    newCard.name = person.name,
    newCard.birthday = person.birthday,
    newCard.ssn = person.ssn,
    newCard.cardNumber = card.cardNumber,
    newCard.expirationDate = card.expirationDate,
    newCard.securityCode = card.securityCode

    return newCard;
  }
  //Code Here
