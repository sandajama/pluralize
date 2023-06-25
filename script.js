// Good Luck 💪🏾
function pluralize(arr) {
  let count = {}; 
  let result = []; 
for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    count[word] = (count[word] || 0) + 1; 
  }
for (let word in count) {
    if (count[word] > 1) {
      result.push(word + "s");
    } else {
      result.push(word);
    }
  }

return result;
}

  console.log(pluralize(["cat","dog","cat","mouse"]))// ➞ ["cats","dog","mouse"]
  console.log(pluralize(["car", "car", "car"])) //➞ ["cars"]
