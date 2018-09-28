import sys

for line in sys.stdin:
    key = line.strip().split(',')[1]
    if key:
        print(key + '\t1')
