def naive_string(long, short):
    count = 0
    sl = len(short)
    for i in range(len(long)):
        for j in range(sl):
            if short[j] != long[i+j]:
                break
            if j == sl - 1:
                count += 1
    return count

print(naive_string("lorie loled", "lol"))
print(naive_string("lorie loled", "lo"))