import random

WORDS = ('python','script','debugging','shell','string')

correct = random.choice(WORDS)

word = correct
question = ''
pos = 0

while word:
    pos = random.randrange(len(word))
    question += word[pos]
    word = word[:pos] + word[pos + 1:]

print(question)

guess = input('guess...\n')

if (guess == correct):
    print('win!')
else:
    print('gg')
    
