import React from 'react';
import classNames from 'classnames';
import './style.scss';

export default function Row({ gutter, children }) {
  return (
    <div className={classNames('main-row', `main-row-${gutter}`)}>
      {children}
    </div>
  )
}