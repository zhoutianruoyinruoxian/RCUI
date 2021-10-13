import React, { useCallback } from 'react';
import Demo from './Demo';
import toReactElement from 'jsonml-to-react-element';
import { Row, Col } from 'layout';
import './style.scss';

export default function Component({ article, demos = [] }: any) {
  const { content } = article;

  const renderMarkdown = useCallback((content, className = '') => {
    const con = [...content];
    con.splice(1, 0, { className: `markdown ${className}` });
    return toReactElement(con);
  }, []);

  const renderDemo = () => {
    const demoList = demos.sort((a, b) => a.md.meta.order - b.md.meta.order);
    if (article.meta.cols === 1) {
      return (
        <Row gutter={8}>
          <Col span={24}>
            {demoList.map((demo, i) => (
              <Demo
                key={i} // eslint-disable-line
                markdown={demo.md}
              />
            ))}
          </Col>
        </Row>
      );
    } else {
      const list = [[], []];
      demoList.forEach((demo, i) => {
        const item = (
          <Demo
            key={i}  // eslint-disable-line
            markdown={demo.md}
          />
        );
        list[i % 2].push(item);
      });
      return (
        <Row gutter={8}>
          <Col span={12}>{list[0]}</Col>
          <Col span={12}>{list[1]}</Col>
        </Row>
      );
    }
  };

  return (
    <div className="main-component">
      <h2 style={{ marginTop: 0 }}>{article.meta.title} {article.meta.subtitle}</h2>
      {renderMarkdown(content.article)}
      <h3>示例</h3>
      <section className="main-component-demo-section">
        {renderDemo()}
      </section>
      {renderMarkdown(content.api, 'api-container')}
    </div>
  );
}
