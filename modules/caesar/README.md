# Caesar cipher

- Letters are replaced by other letters or symbols.
- The earlier known and simplest method used be Julius Caesar
- Replacing each letter of the alphanet with the letter standing three places further down the alphabet.

## Alphabet

In equations:

- `p` is referring to a _decrypted_ letter
- `C` is referring to an _encrypted_ letter

If we consider the alphabet as an indexed array of letters like so:

| 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  | 11  | 12  | 13  | 14  | 15  | 16  | 17  | 18  | 19  | 20  | 21  | 22  | 23  | 24  | 25  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A   | B   | C   | D   | E   | F   | G   | H   | I   | J   | K   | L   | M   | N   | O   | P   | Q   | R   | S   | T   | U   | V   | W   | X   | Y   | Z   |

We can calculate the position of a letter in two distinct dictionaries, one classic and one shifted by 3 letters. This allow us to target the substitute letter.

> _Exemple p = `C with index of 2 + delta 3 is F`_

The same is happening on decryption we can calculate the reversed position in alphabet:

> _Exemple p = `F with index of 5 - delta 3 is C`_

## Encryption Formula

- Where `C` is the encrypted result letter
- And `E()` is the encryption method

Consider the follow formula:

```
C = E(p,k) mod 26 = (p + k) mod 26
```

> _For example: `Encrypt("n",3) = "q"`_

## Decryption Formula

- Where `p` is the decrypted result letter
- And `D()` is the Decryption method

Consider the follow formula:

```
p = D(C,k) mod 26 = (C - k) mod 26
```

> _For example: `Decrypt("q",3) = "n"`_

# Resources

- [Caesar Cipher](https://youtu.be/JtbKh_12ctg)
