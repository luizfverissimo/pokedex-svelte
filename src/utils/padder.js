export function padder(pad, number) {
  const stringNumber = String(number)
  const paddingValue = pad.substring(0, pad.length - stringNumber.length) + stringNumber
  return paddingValue
}