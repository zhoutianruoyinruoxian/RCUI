import React, { useCallback } from 'react';
import Demo from './Demo';
import toReactElement from 'jsonml-to-react-element';
import { Row, Col } from 'layout';
import './style.scss';

export default function Component({ article, demos }: any) {
  const { content } = article;

  const renderMarkdown = useCallback((content, className = '') => {
    const con = [...content];
    con.splice(1, 0, { className: `markdown ${className}` });
    return toReactElement(con);
  }, []);

  return (
    <div className="main-component">
      <h3 style={{ marginTop: 0 }}>{article.meta.title}</h3>
      {renderMarkdown(content.article)}
      <h3>示例</h3>
      <section className="main-component-demo-section">
        <Row gutter={8}>
          {demos.sort((a, b) => a.md.meta.order - b.md.meta.order).map((demo, i) => (
            <Col span={article.meta.cols === 1 ? 24 : 12} key={i}> {/* eslint-disable-line */}
              <Demo
                markdown={demo.md}
              />
            </Col>
          ))}
        </Row>
      </section>
      {renderMarkdown(content.api, 'api-container')}
    </div >
  );
}
