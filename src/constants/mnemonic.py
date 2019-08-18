#-*- coding:utf-8 -*-
import random
import hashlib

'''
Date: 2019-08-18
User: Seobee
Purpose:
        for Mnemonic pharse.
        1. 128비트의 랜덤 스트링 생성
        2. 2048개의 단어 문구중 12개의 단어를 랜덤으로 뽑아주는 함수 생성.( File 을 통해 rand으로 )
        3. 단어와 bit를 매핑하는 방법.??
        
        -- 클래스는 기능구현 끝난 후 제작할 예정.
'''

# 2048개의 단어 중 12개의 단어를 뽑아오는 함수.
with open('./wordlist/english.txt') as data:
    text = list(data.read().split('\n'))
    random_word = list()
    for i in range(0, 12):
        word = random.choice(text)
        random_word.append(word)
        text.remove(word)

    print(random_word)

# 이하 아래의 작업은 1~2번까지의 작업.
# https://medium.com/@devAsterisk/hd-%EC%A7%80%EA%B0%91%EA%B3%BC-%EB%8B%88%EB%AA%A8%EB%8B%89-mnemonic-%EC%BD%94%EB%93%9C-5a28cf0d4b07
# 위의 URL 을 참고하여 작업을 진행함.
randombit = random.getrandbits(128)
hex = str(randombit).encode()
sha = hashlib.new('sha256')
sha.update(hex)
sha256_bit = sha.hexdigest()
print(sha256_bit)

front4 = sha256_bit[0:4]

print(front4)

total_randombits = str(randombit) + front4
print(total_randombits)
