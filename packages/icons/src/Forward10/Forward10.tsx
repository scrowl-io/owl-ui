import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsForward10Props } from './Forward10.types';

export const Component = (props: IconsForward10Props) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>forward_10</Default>;
};

export default {
  Component,
};
