import sys

pairs = []
dictionary = {}

for line in sys.stdin:
    value, key = line.strip().split("\t")
    if value:
        if (key, value) not in pairs:
            pairs.append((key,value))

for category, val in pairs:
    if category not in dictionary.keys():
        dictionary[category] = 1
    else:
        dictionary[category] += 1

for key, value in dictionary.items():
    print(key + '\t' + str(value))

    
    
