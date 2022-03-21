import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFilter4Props } from './Filter4.types';

export const Component = (props: IconsFilter4Props) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>filter_4</Default>;
};

export default {
  Component,
};
