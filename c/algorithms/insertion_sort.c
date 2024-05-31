#include <stdio.h>

void insertion_sort(int *arr, int size)
{
    for (int i = 1; i < size; i++)
    {
        int j = i - 1;
        while (j >= 0 && arr[j + 1] < arr[j])
        {
            int temp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = temp;
            j--;
        }
    }
}

int main(void)
{
    int arr_size = 21;
    int arr[] = {2, 52, 6, 1, 12, 6, 7, 2, 634, 7, 3, 2, 8, 9, 0, 3, 33, 8, 44, 2, 4};
    insertion_sort(arr, arr_size);
    for (int i = 0; i < arr_size; i++)
    {
        printf("%d ", arr[i]);
    }
    printf("\n");
    return 0;
}