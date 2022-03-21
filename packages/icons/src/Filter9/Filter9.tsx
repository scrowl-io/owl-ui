import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFilter9Props } from './Filter9.types';

export const Component = (props: IconsFilter9Props) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>filter_9</Default>;
};

export default {
  Component,
};
