import shifter from './dictionary'

test('Should shift the alphabet of 3 letters', () => {
  expect(shifter(3)).toEqual([
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'a',
    'b',
    'c',
  ])
})
