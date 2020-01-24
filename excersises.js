const diff = (arr1, arr2) => {

  return [
      ...arr1
        .filter((num, index, arr) => arr.indexOf(num) === index)
        .reduce((acc, cur) => {
            if (arr2.find(item => item === cur)) {
              arr2 = arr2.filter(item => item !== cur);
            } else {
              acc.push(cur);
            }

            return acc;
          }, []), 
      ...arr2.filter((num, index, arr) => arr.indexOf(num) === index)
    ].sort((a,b) => a - b);
}

function sym(...args) {
  if (args.length === 1) return args[0];
  else return diff(args[0], sym(...args.slice(1)));
}

console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));


function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    arr2.forEach(item2 => {
        const pos = arr1.findIndex(item => item[1] === item2[1]);

        if (pos > -1) {
            arr1 = [
                    ...arr1.slice(0, pos),
                    [arr1[pos][0] + item2[0], arr1[pos][1]],
                    ...arr1.slice(pos + 1)
                ];
        } else {
            arr1.push(item2);
        }
    });
    
    return arr1.sort((a,b) => 
        a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0);
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));



function multiplesOf3and5(number) {
  // Good luck!
  let res = 0;

  for(let i=3; i<number; i=i+3) {
    res += i;
  }

  for(let i=5; i<number; i=i+5) {
    if (i % 3) res += i;
  }

  return res;
}

console.log(multiplesOf3and5(1000));


const sort = arr => {

  let swaps = false;

  for(let i=0; i<arr.length-1; i++) {
    if (arr[i] > arr[i + 1]) {
      arr = [
        ...arr.slice(0, i),
        ...arr.slice(i + 1),
        arr[i]
      ];

      swaps = true;
      i--;
    }
  }

  return {swaps, arr};
}


function bubbleSort(array) {

  let swaps = false;

  do {
    const res = sort(array);
    swaps = res.swaps;
    array = res.arr;
  } while (swaps);

  return array;
}

console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));