console.log(arrowTitle)
/* START CODE UNDER THIS LINE */

// qestion_1

// make sure that the variable is in the global scope
let myFavoriteFood =  'myFavoriteFood';

const favoriteFood = function () {

     return myFavoriteFood;
    
    // TODO: Your code here
  };
   
   // => the value of `myFavoriteFood` variable
  
//Q_2

const updateFavoriteFood = function (newValue) {
    // TODO: Your code here
      
     myFavoriteFood=newValue;

    
  };
  
  updateFavoriteFood("Pizza");
  favoriteFood(); // => "Pizza"
  