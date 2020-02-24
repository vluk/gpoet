import numpy as np

clgs = ["a", "b", "c", "d"]
probs = [0.2, 0.3, 0.4, 0.5]
pref = [[0, 1, 0, 0],
        [0, 0, 0, 1],
        [0, 0, 0, 1],
        [0, 0, 0, 1]]

def probabilities(clgs, probs, pref):
    pref_probs = [0] * len(pref[0])
    no_prev = 1
    for i in range(len(clgs)):
        for j in range(len(pref[i])):
            pref_probs[j] += probs[i] * probs[j] * pref[i][j] * no_prev
        no_prev *= 1 - probs[i]
    return pref_probs

print(probabilities(clgs, probs, pref))
