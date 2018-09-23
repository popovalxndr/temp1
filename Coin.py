import random

flips = 0
tail = 0
eagle = 0

while flips != 100:
    if random.randrange(2):
        tail += 1
    else:
        eagle += 1
    flips += 1

input("after 100 flips we have " + str(tail) + " tails and " + str(eagle) + " eagles\n")
     
    
    
