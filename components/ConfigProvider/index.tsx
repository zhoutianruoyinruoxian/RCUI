import React from 'react';




export const ConfigContext = React.createContext({
  getPrefixCls: (prefixCls: string, customPrefixCls: string) => {
    if (customPrefixCls) return customPrefixCls;
    return prefixCls ? `rcui-${prefixCls}` : 'rcui';
  },
});
