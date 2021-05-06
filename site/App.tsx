import React, { useReducer } from 'react';
import { Layout, LeftNav, Header, Footer, Content } from 'layout';
import { reducer } from 'utils';
import type { RouteItem } from 'site/config/router.config';

interface Store {
  menuList?: RouteItem[];
  prefixCls?: string;
}
interface Reducer {
  (store: Store, action: Store): any;
}

export const PageContext = React.createContext<Store>({});

export let dispatch: Function = () => { };

function App({ menuList, children }: any) {

  const initStore = {
    menuList,
    prefixCls: 'main',
  };

  const [store, setStore] = useReducer(reducer, initStore);

  dispatch = setStore;

  return (
    <div className="App">
      <PageContext.Provider value={store}>
        <Layout>
          <Header />
          {children}
        </Layout>
      </PageContext.Provider>
    </div>
  );
}

export default App;
