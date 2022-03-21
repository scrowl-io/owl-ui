import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFlareProps } from './Flare.types';

export const Component = (props: IconsFlareProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>flare</Default>;
};

export default {
  Component,
};
