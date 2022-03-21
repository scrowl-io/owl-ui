import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsViewListProps } from './ViewList.types';

export const Component = (props: IconsViewListProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>view_list</Default>;
};

export default {
  Component,
};
