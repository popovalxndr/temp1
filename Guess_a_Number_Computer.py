import random

num = int(input("input magic number\n"))

guess = 0
tries = 0

min_num = 1
max_num = 100

while num != guess :
    guess = min_num + (max_num - min_num) // 2
    tries += 1
    print(tries, "guess is", guess, num, min_num, max_num)
    if num < guess :
        max_num = guess
    else :
        min_num = guess

