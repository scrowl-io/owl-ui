import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsStoreMallDirectoryProps } from './StoreMallDirectory.types';

export const Component = (props: IconsStoreMallDirectoryProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>store_mall_directory</Default>;
};

export default {
  Component,
};
