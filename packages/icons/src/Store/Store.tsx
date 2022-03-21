import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsStoreProps } from './Store.types';

export const Component = (props: IconsStoreProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>store</Default>;
};

export default {
  Component,
};
