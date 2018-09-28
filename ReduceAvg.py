import sys

(lastKey, count, sum) = (None, 0, 0)

for line in sys.stdin:
    (key, value) = line.strip().split("\t")
    if lastKey and lastKey != key:
        print(lastKey + '\t' + str(int(sum / count)))
        (lastKey, count, sum) = (key, 1, int(value))
    else:
        (lastKey, count, sum) = (key, count + 1, sum + int(value))

if lastKey:
    print(lastKey + '\t' + str(int(sum / count)))
              
