import React from 'react';
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';

// import remark from 'remark';
// import recommended from 'remark-preset-lint-recommended';
// import html from 'remark-html';

import mt from 'mark-twain';

const md = new MarkdownIt({
  highlight: function (str, lang) {
    console.log(str, lang, 888)
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) { }
    }

    return ''; // use external default escaping
  },
});

export default function (props) {
  // console.log(md.render(props.content), 222)
  // remark()
  //   .use(recommended)
  //   .use(html)
  //   .process(props.content, function (err, file) {
  //     // console.error(report(err || file))
  //     console.log(md.render(props.content), file.contents, 555)
  //   })
  console.log(mt(`
    \`\`\`js
    // An highlighted block
    var foo = 'bar';
      function a() {
      }
    \`\`\`
  `), 777)
  return (
    <div className="main-code-box markdown">
      <h3>示例：</h3>

      <div className="demo markdown"

        dangerouslySetInnerHTML={{
          __html: props.description,
        }}
      />
      <div className="code markdown"

        dangerouslySetInnerHTML={{
          __html: md.render(props.content),
        }}
      />
    </div>
  );
}
