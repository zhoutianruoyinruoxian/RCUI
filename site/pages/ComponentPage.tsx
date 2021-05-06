import React, { useContext, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Layout, LeftNav, Content } from 'layout';
import { PageContext } from 'site/App';

export default function ComponentPage({ children }) {

  const { pathname } = useLocation();
  const { menuList } = useContext(PageContext);

  const navList = useMemo(() => {
    return menuList.find(({ path }) => pathname.includes(path)).routes;
  }, [menuList, pathname]);

  return (
    <Layout mode="row">
      <LeftNav navlist={navList} />
      <Layout style={{ position: 'relative' }}>
        <Content>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
