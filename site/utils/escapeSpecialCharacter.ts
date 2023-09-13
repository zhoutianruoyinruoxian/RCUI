export default function escapeSpecialCharacter(str: string) {
  // const pattern = /[`~!@#_$%^&*()=|{}':;',\\\[\\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？\s]/g;
  const pattern = /[`~!@#_$%^&*()=|{}':;',\\[\\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？\s]/g;
  return str.replace(pattern, (match => '\\' + match));
}
