import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFilter3Props } from './Filter3.types';

export const Component = (props: IconsFilter3Props) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>filter_3</Default>;
};

export default {
  Component,
};
