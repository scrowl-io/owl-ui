import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsReceiptProps } from './Receipt.types';

export const Component = (props: IconsReceiptProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>receipt</Default>;
};

export default {
  Component,
};
