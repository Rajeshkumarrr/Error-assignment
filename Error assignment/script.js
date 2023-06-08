//1. Expected Results

convertToNumber ("123") 

convertToNumber ("abc") 

//2.Building Robust Functions in JavaScript

console.log(getPerson({ name: "Mithun", age: 20}));

console.log(getPerson({ name: "Mithun" }));
console.log(getPerson(["name", "Mithun"]));

//3.Car Description Class.

console.log(myCar.getDescription()); 

//4. Employee Class Challenge.

console.log(employeel.getSalary()); 


//5. Implementing a Person Class with Default Values

const person1 = new Person("Mithun", 20);

console.log(person1.getDetails()); 

const person2 = new Person();

console.log(person2.getDetails()); 

//6. Using Static Method to Add Two Numbers with Calculator Class

console.log(result); 

//7. Password Checker.

const user = new User("Mithun", "Password123");
console.log(user.getPassword()); 

user.setPassword("myPassword"); 
user.setPassword("MyPassword");

user.setPassword("Mypassword123");

console.log(user.getPassword());


//8. Adding a Method to a Prototype.
const student = new Student ("Mithun");

student.printDetails(); // "Hello, the student is Mithun"

//9. Check the presence using closures.

const arr = [1, 2, 3, 4, 5];

const checkNum = numberChecker(arr);

console.log(checkNum(3)

);

console.log(checkNum(6)); // false

//10. Filter by Category.

var products = [

{ name: "Shirt", category: "Clothing" },

{ name: "Pants", category: "Clothing" },

{ name: "Hat", category: "Accessories" },

];

var clothingProducts = 
filterByCategory (products)("Clothing");

console.log(clothingProducts);

