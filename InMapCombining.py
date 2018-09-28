import sys

for line in sys.stdin:
    dictionary = {}
    for token in line.strip().split(" "):
        if token:
            if token in dictionary.keys():
                dictionary[token] += 1
            else:
                dictionary[token] = 1

    for key, value in dictionary.items():
        print(key + '\t' + str(value))
