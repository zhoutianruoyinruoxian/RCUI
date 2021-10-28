import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { PageContext } from 'site/App';
import { Input, Typography } from 'antd';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import type { BasicProps } from '../types';
import './style.scss';

interface HeaderProps extends BasicProps {
}


const { Text } = Typography;
const CTRL_KEY = 'Ctrl';
const CMD_KEY = '⌘';

const searchClient = algoliasearch(
  'latency',
  '6be0576ff61c053d5f9a3225e2a90f76',
);

export default function Header() {
  const { menuList, prefixCls } = useContext(PageContext);

  const renderNav = () => menuList.map(({ name, path }) => (
    <li
      key={path}
      className={`${prefixCls}-header-nav-list`}
    >
      <NavLink to={path} >{name}</NavLink>
    </li>
  ));

  return (
    <div className={`${prefixCls}-header`}>
      <Link className={`${prefixCls}-header-logo`} to="/" >
        {/* <img src={logo} width="140" height="48" /> */}
        <span>RCUI</span>
      </Link>
      <div className={`${prefixCls}-header-left`}>
        {/* <Input
          placeholder="搜索"
          onTouchStart={triggerSearchModalImport}
          onMouseOver={triggerSearchModalImport}
          value={inputSearch}
          onChange={handleInputChange}
          onFocus={() => {
            triggerSearchModalImport();
            handleInputFocus(true);
          }}
          onBlur={() => {
            handleInputFocus(false);
          }}
          prefix={<SearchOutlined />}
          suffix={
            typeof window !== 'undefined' && (
              <Tooltip placement="right" title={isZhCN ? '唤起搜索窗' : 'Search in doc modal'}>
                <span
                  className="keybindings"
                  onClick={() => {
                    // move userSearch to SearchModal
                    setSearchModalQuery(inputSearch);
                    setInputSearch('');
                    handleModalOpen();
                  }}
                >
                  <Text keyboard className="keybinding">
                    {isAppleDevice() ? CMD_KEY : CTRL_KEY}
                  </Text>
                  <Text keyboard className="keybinding">
                    K
                  </Text>
                </span>
              </Tooltip>
            )
          }
        /> */}
      </div>
      <ul className={`${prefixCls}-header-nav`}>
        {renderNav()}
      </ul>
    </div>
  );
}
