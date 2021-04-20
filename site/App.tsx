import React, { Component } from 'react';
import { Layout, LeftNav, Header, Footer, Content } from 'site/layout';

class App extends Component<any> {

  render() {
    return (
      <div className="App">
        <Layout>
          <Header />
          <Layout mode="row">
            <LeftNav routeList={this.props.routeList} />
            <Layout style={{ position: 'relative' }}>
              <Content>
                {this.props.children}
              </Content>
              <Footer />
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
