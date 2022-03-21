import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsArrowDropUpProps } from './ArrowDropUp.types';

export const Component = (props: IconsArrowDropUpProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>arrow_drop_up</Default>;
};

export default {
  Component,
};
