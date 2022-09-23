const stringDictionary = 'abcdefghijklmnopqrstuvwxyz'
export const dictionary = Array.from(stringDictionary)

const shifter = (times: number = 3): string[] => {
  for (let index = 0; index < times; index++) {
    let head = dictionary.shift()
    dictionary.push(head as string)
  }
  return dictionary
}

export default shifter
