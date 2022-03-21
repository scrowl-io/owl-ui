import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFilter2Props } from './Filter2.types';

export const Component = (props: IconsFilter2Props) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>filter_2</Default>;
};

export default {
  Component,
};
