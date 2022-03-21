import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFilter1Props } from './Filter1.types';

export const Component = (props: IconsFilter1Props) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>filter_1</Default>;
};

export default {
  Component,
};
