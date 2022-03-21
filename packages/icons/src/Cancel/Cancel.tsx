import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCancelProps } from './Cancel.types';

export const Component = (props: IconsCancelProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>cancel</Default>;
};

export default {
  Component,
};
