VOWELS = "уеыаоэяию"

str = input("type text\n")
new_str = ''

for letter in str:
    if letter.lower() not in VOWELS:
        new_str += letter


print(new_str)        
    

