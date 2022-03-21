import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFilter6Props } from './Filter6.types';

export const Component = (props: IconsFilter6Props) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>filter_6</Default>;
};

export default {
  Component,
};
