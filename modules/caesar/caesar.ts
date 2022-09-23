import shifter, { dictionary } from '../../utils/dictionary'

export const encryptWord = (letter: string) => {
  const letterPosition = dictionary.findIndex(
    (dicLetter) => dicLetter === letter
  )
  const encryptedLetterPosition = (letterPosition + 3) % dictionary.length
  console.log('encryptedLetterPosition', encryptedLetterPosition)
  return dictionary[encryptedLetterPosition]
}

export const decryptWord = (letter: string) => {
  const encryptedDictionary = shifter(3)
  const encryptedLetterPosition = encryptedDictionary.findIndex(
    (dicLetter) => dicLetter === letter
  )
  console.log('encryptedLetterPosition', encryptedLetterPosition)
  const decryptedLetterPosition =
    (encryptedLetterPosition - 3) % dictionary.length
  return dictionary[decryptedLetterPosition]
}

export const encrypt = (sentence: string) => {
  const arrayifiedSentence = Array.from(sentence)
  return arrayifiedSentence.forEach((letter) => encryptWord)
}
