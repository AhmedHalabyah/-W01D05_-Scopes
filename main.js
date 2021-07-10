console.log(arrowTitle)
/* START CODE UNDER THIS LINE */

// qestion_1

// make sure that the variable is in the global scope
let myFavoriteFood =  'borger';

const favoriteFood = function () {

     return myFavoriteFood;
    
    // TODO: Your code here
  };
  
   
   // => the value of `myFavoriteFood` variable
  
//Q_2

const updateFavoriteFood = function (newValue) {
    // TODO: Your code here
      
     myFavoriteFood=newValue;
    return myFavoriteFood
    
  };
  
  updateFavoriteFood("Pizza");
  favoriteFood(); // => "Pizza"



  //Q_3
  // Use the following closure function to
  // create two separate counters
 
const createCounter_1 = function () {
  let counter = 0;

  // this anonymous function is a closure function that has access to its own closure variable
  return function () {
    counter = counter + 1;
    return counter
  };
};

const count_1 = createCounter_1();

const createCount_2 = function (start) {
  let counter = start;

  // this anonymous function is a closure function that has access to its own closure variable
  return function () {
    counter = counter + 1;
    return counter
  };
};


const count_2 = createCount_2(5);


// <_____________Practice____________>
 //Q_1

let age = 25;
if (true) {
  age = 30;
}
//console.log(age);  
age; // ?

const myName = "John";
if (true) {
  const myName = "Jane";    
}
//console.log(myName);   

myName; // ?


//Q_2     Predict the value of the following function invocations.
let number = 10; // global
const func1 = function () {
  let number = 15; //lacal

  if (true) {
    let number = 24;
  }

  return number;
};

func1();  // = 15


const func2 = function (age) {
  age = 10;
  if (true) {
    let age = 24;
    age = 20;
  }

  return age;
};

func2(26); //  = 10


// Q_3 
let count =5; //3
const countDown = function () {
  if(count > 0)
   count  -- ;//count = count -1 ;

   else 
   return 'count down is over';

   return count ;
};


 // => 4
console.log(countDown());
console.log(countDown());
console.log(countDown());
console.log(countDown());
console.log(countDown());
console.log(countDown());

//Q_5

let x =3; 
const countUp = function () {
   x  ++ ;

   return x  ;
};


console.log(countUp()); // => 4
console.log(countUp()); // => 5
console.log(countUp()); // => 6
console.log(countUp()); // => 7
console.log(countUp()); // => 8

//Q_6

const resetCount = function (start) {
  // TODO: Your code here
  x = start;
  return x ;
};

resetCount(0); // => "the count has been reset"
console.log(countUp()); // => 1
resetCount(10); // => "the count has been reset"
console.log(countUp()); // => 11

//Q_6
let str = '';
const addToList = function (toDo) {
  str += toDo+' ';
  return str;
};

console.log(addToList("Eat")); // => 'Eat'
console.log(addToList("Play")); // => 'Eat Play'
console.log(addToList("Sleep")); // => 'Eat Play Sleep'
console.log(addToList("repeat")); // => 'Eat Play Sleep repeat'


//Q_7
    
const createToDoList = function () {

  let sta = '';
  return function (toDo) {
    sta += toDo +' ';
    return sta;
  };
  
};

const toDoListOne = createToDoList();
console.log(toDoListOne("Eat")); // => 'Eat'
console.log(toDoListOne("Play")); // => 'Eat Play'
console.log(toDoListOne("Sleep")); // => 'Eat Play Sleep'
console.log(toDoListOne("repeat")); // => 'Eat Play Sleep repeat'



//Q_8

let val = 0 ;
const deposit = function (amount) {
  val = val + amount
  return val;
};

console.log(deposit(100)); // => 100
console.log(deposit(50)); // => 150
console.log('//////////');

// Q_9

const withdraw = function (amount) {
     if((val - amount) > 0)
         val -= amount;
        else
        return `insufficient funds, current balance: ${val}`; 

   return val;
};

console.log(deposit(100)); // => 100
console.log(deposit(50)); // => 150
console.log(withdraw(70)); // => 80
console.log(deposit(50)); // => 130
console.log(withdraw(100)); // => 30
console.log(withdraw(100)); // => "insufficient funds, current balance: 30"

console.log('////////////');






//Q_10
const createAccount = function (initialValue) {
  // TODO: Your code here
  let val = 0;
  return function(str, num){
    if(str === "withdraw"){
      if((val - num) > 0)
      val -= num;
     else
     return `insufficient funds, current balance: ${val}`; 

    }
    else{
      return val = val + num;
    }
  }
};
const accountOne = createAccount(0);
console.log(accountOne("withdraw", 10));
console.log(accountOne("deposit", 50));
console.log(accountOne("deposit", 70));
console.log(accountOne("withdraw", 10));









