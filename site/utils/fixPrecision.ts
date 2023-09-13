export default function fixPrecision(num: number, precision = 2) {
  const b = Math.pow(10, precision);
  return Math.round(num * b) / b;
}
