#include <stdio.h>

void selection_sort(int *arr, int size) {
    int min;
    for (int i = 0; i < size; i++) {
        min = i;
        for (int j = i; j < size; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        int temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
}

int main(void) {
    int arr_size = 21;
    int arr[] = {2, 52, 6, 1, 12, 6, 7, 2, 634, 7, 3, 2, 8, 9, 0, 3, 33, 8, 44, 2, 4};
    selection_sort(arr, arr_size);
    for (int i = 0; i < arr_size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
    return 0;
}