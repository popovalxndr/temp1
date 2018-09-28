import sys

(lastKey, sum, count) = (None, 0, 0)

for line in sys.stdin:
    (key, value) = line.strip().split("\t")
    val = int(value[:value.index(';')])
    if lastKey and lastKey != key:
        print(lastKey + '\t' + str(sum) + ';' + str(count))
        (lastKey, sum, count) = (key, val, 1)
    else:
        (lastKey, sum, count) = (key, sum + val, count + 1)

if lastKey:
    print(lastKey + '\t' + str(sum) + ';' + str(count))
              
