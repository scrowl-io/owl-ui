import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsListProps } from './List.types';

export const Component = (props: IconsListProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>list</Default>;
};

export default {
  Component,
};
