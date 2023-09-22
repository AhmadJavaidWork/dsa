const arr = [
  2, 52, 6, 1, 12, 6, 7, 2, 634, 7, 3, 2, 8, 9, 0, 3, 33, 8, 44, 2, 4,
];

function selectionSort(arr) {
  let min;
  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    const temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

console.log(selectionSort(arr));
