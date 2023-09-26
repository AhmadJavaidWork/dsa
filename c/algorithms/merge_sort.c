#include <stdio.h>

void merge(int *arr, int lo, int hi, int m)
{
    int n1 = m - lo + 1;
    int n2 = hi - m;

    int leftArray[n1];
    int rightArray[n2];

    for (int i = 0; i < n1; i++)
    {
        leftArray[i] = arr[lo + i];
    }
    for (int j = 0; j < n2; j++)
    {
        rightArray[j] = arr[m + j + 1];
    }

    int i = 0;
    int j = 0;
    int k = lo;

    while (i < n1 && j < n2)
    {
        if (leftArray[i] <= rightArray[j])
        {
            arr[k] = leftArray[i];
            i++;
        }
        else
        {
            arr[k] = rightArray[j];
            j++;
        }
        k++;
    }

    while (i < n1)
    {
        arr[k] = leftArray[i];
        i++;
        k++;
    }

    while (j < n2)
    {
        arr[k] = rightArray[j];
        j++;
        k++;
    }
}

void merge_sort(int *arr, int lo, int hi)
{
    if (lo >= hi)
        return;
    int m = lo + ((hi - lo) / 2);
    merge_sort(arr, lo, m);
    merge_sort(arr, m + 1, hi);
    merge(arr, lo, hi, m);
}

int main(void)
{
    int arr_size = 21;
    int arr[] = {2, 52, 6, 1, 12, 6, 7, 2, 634, 7, 3, 2, 8, 9, 0, 3, 33, 8, 44, 2, 4};
    merge_sort(arr, 0, arr_size);
    for (int i = 0; i < arr_size; i++)
    {
        printf("%d ", arr[i]);
    }
    printf("\n");
    return 0;
}