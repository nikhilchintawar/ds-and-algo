from typing import Set


def has_pair_with_sum(arr, sum):
    my_set = set()
    length = len(arr)
    for i in range(length):
        if i in my_set:
            return True
        my_set.add(sum - arr[i])
        print(my_set)
    return False


has_pair_with_sum([6, 4, 3, 2, 1, 7], 9)
