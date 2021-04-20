const keys = ['category', 'subtitle', 'type', 'title', 'order', 'cols'];

export default function markdown(md, mdPath) {
  let markdownData: any = {};
  let pageMsg = '';
  try {
    pageMsg = md.match(/<hr>(.|\n)*<hr>/)[0];
  } catch (e) {
    throw new Error(`The format of file '${mdPath}' is incorrect`);
  }
  markdownData.content = md.replace(pageMsg, '');
  markdownData = Object.assign({}, markdownData, getTitleMsg(pageMsg, keys));

  return markdownData;
}

function getTitleMsg(pageMsg: string, keys) {
  const obj = {};
  const str = pageMsg.replace(/<\/p>/, ''); // 将字符串的最后一栏的结尾</p>字符串去掉防止后面的正则取到
  keys.forEach(key => {
    const value = str.match(new RegExp(`(?<=\n${key}: ).*`))?.[0];
    obj[key] = value;
  });
  return obj;
}
