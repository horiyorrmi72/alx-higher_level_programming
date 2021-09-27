#!/usr/bin/python3
def safe_print_list(my_list=[], x=0):
    idx = 0
    for idx < x:
        try:
        print("{}".format(my_list[idx]), end="")
except indexError:
    break
idx += 1
print("")
return idx
