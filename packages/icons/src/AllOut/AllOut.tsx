import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAllOutProps } from './AllOut.types';

export const Component = (props: IconsAllOutProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>all_out</Default>;
};

export default {
  Component,
};
