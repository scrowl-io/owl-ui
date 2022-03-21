import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSearchProps } from './Search.types';

export const Component = (props: IconsSearchProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>search</Default>;
};

export default {
  Component,
};
