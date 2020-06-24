// Here, we create our main function.

function fizzbuzz() {
  console.log("Welcome to Fizzbuzz");
  //put your code here
  for (let i = 0; i <= 100; i++) {
    let result = "";
    if (i % 3 === 0) {
      result += "fizz";
    }
    if (i % 5 === 0) {
      result += "buzz";
    }
    if (result === "") {
      result = i;
    }
    console.log(result);
  }
}

// Now we run the main function...

fizzbuzz();
