#!/usr/bin/python3
"""
An element in the list is said to be peak if
it is NOT smaller than its neighbors.
For corner elements, we need to consider only one neighbor.
"""


def find_peak(n):
    """find pick element"""
    if n == []:
        return None

    def recursive(n, left=0, right=len(n) - 1):
        """helper recursive function"""

        mid = (left + right) // 2

        # check if the middle element is greater than its neighbors
        if ((mid == 0 or n[mid - 1] <= n[mid]) and
                (mid == len(n) - 1 or n[mid + 1] <= n[mid])):
            return n[mid]

        # If the left neighbor of `mid` is greater than the middle element,
        # find the peak recursively in the left sublist
        if mid - 1 >= 0 and n[mid - 1] > n[mid]:
            return recursive(n, left, mid - 1)

        # If the right neighbor of `mid` is greater than the middle element,
        # find the peak recursively in the right sublist
        return recursive(n, mid + 1, right)

    return recursive(n)
