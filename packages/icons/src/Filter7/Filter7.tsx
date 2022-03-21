import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFilter7Props } from './Filter7.types';

export const Component = (props: IconsFilter7Props) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>filter_7</Default>;
};

export default {
  Component,
};
