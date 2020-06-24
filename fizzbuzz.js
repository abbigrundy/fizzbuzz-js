// Here, we create our main function.

function fizzbuzz() {
  console.log("Welcome to Fizzbuzz");
  //put your code here
  for (let i = 0; i <= 70; i++) {
    let result = "";

    if (i % 3 === 0) {
      result += "fizz";
    }

    if (i % 5 === 0) {
      result += "buzz";
    }

    if (i % 7 === 0) {
      result += "bang";
    }

    if (i % 11 === 0) {
      result += "bong";
    }

    if (i % 13 === 0) {
      const firstB = result.search("b");
      if (firstB === -1) {
        result = result + "Fezz";
      } else {
        resultFirstSplit = result.slice(0, firstB);
        resultSecondSplit = result.slice(firstB);
        resultIfB = "Fezz";
        result = resultFirstSplit + resultIfB + resultSecondSplit;
      }
    }
    if (result === "") {
      result = i;
    }
    console.log(result);
  }
}
// Now we run the main function...

fizzbuzz();
