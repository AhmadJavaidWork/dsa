const arr = [
  2, 52, 6, 1, 12, 6, 7, 2, 634, 7, 3, 2, 8, 9, 0, 3, 33, 8, 44, 2, 4,
];

function merge(arr, lo, hi, m) {
  let n1 = m - lo + 1;
  let n2 = hi - m;

  let leftArray = new Array(n1);
  let rightArray = new Array(n2);

  for (let i = 0; i < n1; i++) {
    leftArray[i] = arr[lo + i];
  }
  for (let j = 0; j < n2; j++) {
    rightArray[j] = arr[m + j + 1];
  }

  let i = 0,
    j = 0,
    k = lo;

  while (i < n1 && j < n2) {
    if (leftArray[i] <= rightArray[j]) {
      arr[k] = leftArray[i];
      i++;
    } else {
      arr[k] = rightArray[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = leftArray[i];
    i++;
    k++;
  }

  while (j < n2) {
    arr[k] = rightArray[j];
    j++;
    k++;
  }
  return arr;
}

function mergeSort(arr, lo, hi) {
  if (lo >= hi) return;
  const m = lo + Math.floor((hi - lo) / 2);
  mergeSort(arr, lo, m);
  mergeSort(arr, m + 1, hi);
  return merge(arr, lo, hi, m);
}

const hi = arr.length - 1;
const lo = 0;
console.log(mergeSort(arr, lo, hi));
