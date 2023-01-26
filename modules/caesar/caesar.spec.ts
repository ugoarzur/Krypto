import { decryptLetter, encryptLetter, encrypt } from './caesar'

const encrypted = "WLQWLQ HW OH VFDUDEHH G'RU"
const message = "TINTIN ET LE SCARABEE D'OR"

test('Should Encrypt one letter', () => {
  expect(encryptLetter('n')).toEqual('q')
})

test('Should Encrypt a word', () => {
  const trimedMessage = message.split(' ').join('')
  const trimedExpected = encrypted.split(' ').join('')
  expect(encrypt(trimedMessage)).toEqual(trimedExpected)
})

test('Should Decrypt', () => {
  expect(decryptLetter('q')).toEqual('n')
})
