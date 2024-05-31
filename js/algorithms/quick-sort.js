function quickSort(arr, l, r) {
  if (l >= r) return arr;

  const pivot = arr[r];
  let left = l;

  for (let i = l; i < r; i++) {
    if (arr[i] < pivot) {
      const temp = arr[i];
      arr[i] = arr[left];
      arr[left] = temp;
      left++;
    }
  }

  arr[r] = arr[left];
  arr[left] = pivot;

  quickSort(arr, l, left - 1);
  quickSort(arr, left + 1, r);

  return arr;
}

const arr = [
  2, 52, 6, 1, 12, 6, 7, 2, 634, 7, 3, 2, 8, 9, 0, 3, 33, 8, 44, 2, 4,
];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
