import React from 'react';
import { Alert } from 'antd';

const { ErrorBoundary } = Alert;
export default class Preview extends React.Component<any> {

  state = {
    demo: null,
  }

  componentDidMount() {
    const { filePath } = this.props;
    const demo = require(`_data/${filePath.join('/')}`);
    this.setState({ demo });
  }

  render() {
    const { demo } = this.state;
    return (

      <div className="main-demo-preview" >
        <ErrorBoundary>
          {demo ? demo() : null}
        </ErrorBoundary>
      </div>
    );
  }
}
