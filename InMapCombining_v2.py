import sys

dictionary = {}

for line in sys.stdin:
    for token in line.strip().split(" "):
        if token:
            if token in dictionary.keys():
                dictionary[token] += 1
            else:
                dictionary[token] = 1

for key, value in dictionary.items():
    print(key + '\t' + str(value))
