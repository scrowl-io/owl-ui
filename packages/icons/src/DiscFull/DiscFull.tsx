import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDiscFullProps } from './DiscFull.types';

export const Component = (props: IconsDiscFullProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>disc_full</Default>;
};

export default {
  Component,
};
