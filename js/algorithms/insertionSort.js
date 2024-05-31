const arr = [
  2, 52, 6, 1, 12, 6, 7, 2, 634, 7, 3, 2, 8, 9, 0, 3, 33, 8, 44, 2, 4,
];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    while (j >= 0 && arr[j + 1] < arr[j]) {
      const temp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
      j--;
    }
  }
  return arr;
}

console.log(insertionSort(arr));
