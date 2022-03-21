import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFilter9PlusProps } from './Filter9Plus.types';

export const Component = (props: IconsFilter9PlusProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>filter_9_plus</Default>;
};

export default {
  Component,
};
