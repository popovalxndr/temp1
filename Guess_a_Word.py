import random

WORDS = ('python','script','debugging','shell','string')

secret = random.choice(WORDS)

print(len(secret))


for i in range(5):
    letter = ''
    while len(letter) != 1:
        letter = input('Type letter to check\n')

    if letter in secret:
        print('Yes')
    else:
        print('No')


guess = input("Ok, try to guess...")

if guess == secret:
    print('Win!')
else:
    print('gg')
    
