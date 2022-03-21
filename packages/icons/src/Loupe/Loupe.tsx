import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLoupeProps } from './Loupe.types';

export const Component = (props: IconsLoupeProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>loupe</Default>;
};

export default {
  Component,
};
