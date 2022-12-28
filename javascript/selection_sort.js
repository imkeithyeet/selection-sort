function selectionSort(arr) {
  // type your code here
    for (let i = 0; i < arr.length -1; i++) {
      let min = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
          min = j;
        }
      }
      [arr[i],arr[min]] = [arr[min],arr[i]]
      // * longer alternative way * 
      // const temp = arr[i];
      // arr[i] = arr[min];
      // arr[min] = temp;
    }
    return arr;
}
if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// for loop method first 
// make a variable of min as i
// for j method and state i as a min
// state arr of i and min to equal min and i in reverse order
// And a written explanation of your solution
