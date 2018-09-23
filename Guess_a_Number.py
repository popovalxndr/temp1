import random

num = random.randrange(100) + 1

guess = int(input("try...\n"))
tries = 1
lose = 0

while num != guess :
    if tries == 6 :
        input("fils bedman. the magic number was " + str(num))
        lose = 1;
        break   
    if num < guess :
        guess = int(input("try less...\n"))
    else :
        guess = int(input("try more\n"))
    tries += 1
 

if not lose:
    print("exact in", tries, "tries!", "the magic number is", num)
    input("\nPress Enter")


