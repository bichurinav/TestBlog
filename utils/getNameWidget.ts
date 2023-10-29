import getFirstLetterUp from "./getFirstLetterUp";

export default (name: string): string => {
  const arWords = name.split('_');
  return arWords
    .map((word) => {
      return getFirstLetterUp(word)
    })
    .join('')
}