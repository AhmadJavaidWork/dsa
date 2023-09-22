const arr = [
  0, 1, 2, 2, 2, 2, 3, 3, 4, 6, 6, 7, 7, 8, 8, 9, 12, 33, 44, 52, 634,
];

function binarySearch(arr, value) {
  let lo = 0,
    hi = arr.length - 1,
    m;
  while (lo <= hi) {
    m = lo + Math.floor((hi - lo) / 2);
    if (arr[m] === value) return true;
    if (arr[m] < value) lo = m + 1;
    else hi = m - 1;
  }
  return false;
}

console.log(binarySearch(arr, 634));
