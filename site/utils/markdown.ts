
interface Doc {
  content: string;
  description: string;
  [props: string]: string;
}
interface ExampleItem {
}

interface Example {
  example: ExampleItem[];
}

type Markdown = Doc & Example

export default async function getMarkdown(originalPath: string) {
  const path = toBigHump(originalPath);

  const { default: document } = await import(`../../components/${path}/index.zh-CN.md`);

  const markdown = renderReadme(document, `components/${path}/index.zh-CN.md`);
  const demoList = markdown.demo.split(' ');
  const demoDocList = await Promise.all(demoList.map(o => import(`../../components/${path}/demo/${o}.md`)));
  const example = demoDocList.map(({ default: demo }) => renderDesc(demo, ''));
  markdown.example = example;
  return markdown;
}

function renderReadme(doc: string, mdPath: string): Markdown {
  const { titleStr, titleObj } = getTitleMsg(doc, mdPath);
  const readme: Markdown = titleObj;
  const str = doc.replace(titleStr, '');
  const description = str.match(/(.|\n)*(?=\n<h2 id="api">API<\/h2>)/)[0];
  const content = str.replace(description, '');
  readme.content = content;
  readme.description = description;

  return readme;
}

function renderDesc(doc: string, mdPath: string) {
  const { titleStr, titleObj } = getTitleMsg(doc, mdPath);
  const desc = titleObj;
  const str = doc.replace(titleStr, '');
  const description = str.match(/(.|\n)*(?=\n<pre><code class="language-(j|t)sx">)/)?.[0] || '';
  const content = str.match(/(?<=<pre><code class="language-(j|t)sx">\n)(.|\n)*(?=\n<\/code><\/pre>)/)?.[0];
  const fn = getFn(content)
  // console.log(description, 11, str, 22, content, 333)
  desc.content = content;
  desc.description = description;
  return desc;
}

function getTitleMsg(doc: string, mdPath: string) {
  let titleMsg = '';
  try {
    titleMsg = doc.match(/<hr>(.|\n)*<hr>/)[0];
  } catch (e) {
    throw new Error(`The format of file '${mdPath}' is incorrect`);
  }
  const str = titleMsg
    .replace(/<hr>\n<p>/, '{\n')
    .replace(/<\/p>\n<hr>/, '\n}')
    .replace(/(?<=: ).+/g, '"$&"')
    .replace(/.+(?=: )/g, '"$&"')
    .replace(/(?<=")\n(?!})/g, ',$&');
  const obj = JSON.parse(str);
  return {
    titleStr: titleMsg,
    titleObj: obj,
  };
}

function getFn (str) {
  console.log(str,333)
  // const demoDocList = await Promise.all(demoList.map(o => import(`../../components/${path}/demo/${o}.md`)));
}


function toBigHump(str: string) {
  const first = str.slice(0, 1).toUpperCase();
  return str.replace(/^\w/, first);
}
