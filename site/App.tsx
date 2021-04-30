import React, { useReducer } from 'react';
import { Layout, LeftNav, Header, Footer, Content } from 'layout';
import { reducer } from 'utils';

const PageContext = React.createContext({});

export let dispatch = () => { };

function App({ routeList, children}:any) {

  const [store, setStore] = useReducer(reducer, { routeList});

  dispatch = setStore;

  return (
    <div className="App">
      <PageContext.Provider value={store}>
        <Layout>
          <Header />
          <Layout mode="row">
            <LeftNav routeList={routeList} />
            <Layout style={{ position: 'relative' }}>
              <Content>
                {children}
              </Content>
              <Footer />
            </Layout>
          </Layout>
        </Layout>
      </PageContext.Provider>
    </div>
  );
}

export default App;
