import sys

for line in sys.stdin:
    (key, value) = line.strip().split('\t')
    if key:
        for category in value.strip().split(','):
            print(key + ',' + category + '\t1')
