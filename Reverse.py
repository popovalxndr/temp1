word = input("type word\n")
reverse = ''

for i in range(-1,(len(word) + 1) * -1, -1):
	reverse += word[i]

print(reverse)	
