import shifter, { dictionary } from '../../utils/dictionary'
/**
 * Encrypt one letter
 * @description encrypt a letter based on two dictionaries, one classic and one shifed
 */
export const encryptLetter = (letter: string) => {
  const letterPosition = dictionary.findIndex(
    (dictionnaryLetter) => dictionnaryLetter === letter
  )
  const encryptedLetterPosition = (letterPosition + 3) % dictionary.length
  return dictionary[encryptedLetterPosition]
}
/**
 * Decrypt one letter
 * @description decrypt a letter based on two dictionaries, one classic and one shifed
 */
export const decryptLetter = (letter: string) => {
  const shiftedDictionary = shifter(3)
  const encryptedLetterPosition = shiftedDictionary.findIndex(
    (dictionnaryLetter) => dictionnaryLetter === letter
  )
  const decryptedLetterPosition =
    (encryptedLetterPosition - 3) % dictionary.length
  return dictionary[decryptedLetterPosition]
}

/**
 * Encrypt the whole word
 */
export const encrypt = (sentence: string) => {
  const arrayifiedSentence = Array.from(sentence)
  const encryptedSentence : string[]= []
  for (let index = 0; index < arrayifiedSentence.length; index++) {
    const letter = arrayifiedSentence[index];
    const encryptedLetter = encryptLetter(letter)
    encryptedSentence.push(encryptedLetter)
  }
  return encryptedSentence.join("");

}
