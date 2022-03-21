import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsTimer10Props } from './Timer10.types';

export const Component = (props: IconsTimer10Props) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>timer_10</Default>;
};

export default {
  Component,
};
