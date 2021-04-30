import React, { useMemo } from 'react';
import Demo from './Demo';
import toReactElement from 'jsonml-to-react-element';
import { Row, Col } from 'layout';
import './style.scss';

export default function ComponentPage({ article, demos }: any) {

  const detail = useMemo(() => {
    const content = [...article.content];
    content.splice(1, 0, { className: 'markdown' });
    return toReactElement(content);
  }, [article]);

  return (
    <div className="main-component">
      <div className="markdown">
        <h2>示例</h2>
      </div>
      <section className="main-component-demo-section">
        <Row gutter={8}>
          {demos.sort((a, b) => a.md.meta.order - b.md.meta.order).map((demo, i) => (
            <Col span={article.meta.cols === 1 ? 24 : 12} key={i}>
              <Demo
                filePath={demo.filePath}
                markdown={demo.md}
              />
            </Col>
          ))}
        </Row>
      </section>
      <div className="main-component-article">
        {detail}
      </div>
    </div>
  );
}
