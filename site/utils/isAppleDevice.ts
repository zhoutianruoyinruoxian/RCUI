export default function isAppleDevice() {
  return /(mac|iphone|ipod|ipad)/i.test(navigator.platform);
}
