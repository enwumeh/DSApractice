class Recursion {
  factorial() {
    (x) => {
      if (x === 0) return 1;
      return x * recursion.factorial(x - 1);
    }
  }

    GCD() {
      (x) => {
        if (x === 0) return 1;
        return x * recursion.factorial(x - 1);
      }
    }
    // Write a recursive function that takes a list of numbers as an input and returns the product of all the numbers in the list.
    // Write a function that takes a string and returns if the string is a palindrome.
    // Write a recursive function that takes an array of words and returns an array that contains all the words capitalized.
    // Program to find the minimum (or maximum) element of an array
  
}

 recursion = {
  factorial: (x) => {
    if (x === 0) return 1;
    return x * recursion.factorial(x - 1);
  },
  GCD: (x, y) => {
    let num = x > y ? x : y;
    let passt = Array.from(Array(num + 1)
      .keys())
      .reverse()
      .filter((element) =>
       x % element == 0 && y % element == 0);
    return Math.max(...passt);
  }
};

console.log(recursion.factorial(20));

console.log(recursion.GCD(25, 50));
// console.log(passt);
