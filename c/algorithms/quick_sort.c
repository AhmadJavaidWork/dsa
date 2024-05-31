#include <stdio.h>

void quick_sort(int *arr, int l, int r)
{
    if (l >= r)
    {

        return;
    }

    int pivot = arr[r];
    int left = l;

    for (int i = l; i < r; i++)
    {
        if (arr[i] < pivot)
        {
            int temp = arr[i];
            arr[i] = arr[left];
            arr[left] = temp;
            left++;
        }
    }

    arr[r] = arr[left];
    arr[left] = pivot;

    quick_sort(arr, l, left - 1);
    quick_sort(arr, left + 1, r);
}

int main(void)
{
    int arr_size = 21;
    int arr[] = {2, 52, 6, 1, 12, 6, 7, 2, 634, 7, 3, 2, 8, 9, 0, 3, 33, 8, 44, 2, 4};
    quick_sort(arr, 0, arr_size - 1);
    for (int i = 0; i < arr_size; i++)
    {
        printf("%d ", arr[i]);
    }
    printf("\n");
    return 0;
}