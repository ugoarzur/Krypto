# Caesar cipher

- Letters are replaced by other letters or symbols.
- The earlier known and simplest method used be Julius Caesar
- Replacing each letter of the alphanet with the letter standing three places further down the alphabet.

## Alphabet

| 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  | 11  | 12  | 13  | 14  | 15  | 16  | 17  | 18  | 19  | 20  | 21  | 22  | 23  | 24  | 25  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A   | B   | C   | D   | E   | F   | G   | H   | I   | J   | K   | L   | M   | N   | O   | P   | Q   | R   | S   | T   | U   | V   | W   | X   | Y   | Z   |

> Exemple p = C with delta 3

## Encryption Formula

```
C = E(p,k) mod 26 = (p + k) mod 26
```

## Decryption Formula

```
p = D(C,k) mod 26 = (C - k) mod 26
```

# Resources

- [Caesar Cipher](https://youtu.be/JtbKh_12ctg)
