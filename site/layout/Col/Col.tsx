import React from 'react';
import classNames from 'classnames';

export default function Col({ span, children }) {
  return (
    <div className={classNames('main-col', `main-col-${span}`)}>
      {children}
    </div>
  )
}