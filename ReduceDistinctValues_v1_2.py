import sys

lastKey = None

for line in sys.stdin:
    key = line[:line.index('\t')]
    if lastKey and lastKey != key:
        print(lastKey)
        lastKey = key
    else:
        lastKey = key

if lastKey:
    print(lastKey)
              
