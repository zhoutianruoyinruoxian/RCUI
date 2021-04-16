import React, { Component } from 'react';
import routeList from 'src/config/router.config';
import { Layout, LeftNav, Header, Footer } from 'src/containers';
import './config/polyfill/polyfill';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Layout>
          <Header />
          <Layout mode="row">
            <LeftNav routeList={routeList} />
            <Layout style={{ position: 'relative' }}>
              <Layout.Content>
                {this.props.children}
              </Layout.Content>
              <Footer />
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
