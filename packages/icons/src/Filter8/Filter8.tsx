import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFilter8Props } from './Filter8.types';

export const Component = (props: IconsFilter8Props) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>filter_8</Default>;
};

export default {
  Component,
};
