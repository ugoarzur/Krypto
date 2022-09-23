import shifter, { dictionary } from '../../utils/dictionary'
import { decryptWord, encrypt, encryptWord } from './caesar'

test('Should Encrypt', () => {
  const message = "WLQWLQ HW OH VFDUDEHH G'RU"
  const expected = "TINTIN ET LE SCARABEE D'OR"
  const trimedMessage = message.trim()
  const trimedExpected = expected.trim()
  expect(encryptWord('n')).toEqual('q')
  expect(encrypt(trimedMessage)).toEqual(trimedExpected)
})

test('Should Decrypt', () => {
  const message = "TINTIN ET LE SCARABEE D'OR"
  const expected = "WLQWLQ HW OH VFDUDEHH G'RU"
  expect(decryptWord('q')).toEqual('n')
})
