import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsForward5Props } from './Forward5.types';

export const Component = (props: IconsForward5Props) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>forward_5</Default>;
};

export default {
  Component,
};
