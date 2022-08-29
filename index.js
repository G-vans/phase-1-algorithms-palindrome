function isPalindrome(word) {
  // Write your algorithm here

  let rightIdx = 0;
let leftIdx = word.length - 1;

while (rightIdx < leftIdx) {
  if(word[rightIdx] !== word[leftIdx]) {
    return false;
  }

  rightIdx++;
  leftIdx--;
}
return true;

}

// function pali(word){
//   return word.split("").reverse().join("")
  

// }


// console.log(pali("abba"));



/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true")
  console.log("=>", isPalindrome("abba"))

  console.log("")

  console.log("Expecting: true")
  console.log("=>", isPalindrome("racecar"))

  console.log("")

  console.log("Expecting: true")
  console.log("=>",isPalindrome("a"))

  console.log("")


  console.log("Expecting: true");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;
