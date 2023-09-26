#include <stdio.h>

int binary_serach(int *arr, int size, int key) {
    int lo = 0;
    int hi = size;
    int m;
    while (lo <= hi) {
        m = lo + ((hi - lo) / 2);
        if (arr[m] == key) return 0;
        if (arr[m] < key) lo = m + 1;
        else hi = m - 1;
    }
    return 1;
}

int main(void) {
    int arr_size = 21;
    int arr[] = {0, 1, 2, 2, 2, 2, 3, 3, 4, 6, 6, 7, 7, 8, 8, 9, 12, 33, 44, 52, 634};
    int found = binary_serach(arr, arr_size, 24);
    printf("%d\n", 634);
    return 0;
}