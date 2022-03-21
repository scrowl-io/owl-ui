import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsTimer3Props } from './Timer3.types';

export const Component = (props: IconsTimer3Props) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>timer_3</Default>;
};

export default {
  Component,
};
