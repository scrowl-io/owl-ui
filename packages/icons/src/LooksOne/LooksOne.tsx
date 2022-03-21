import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLooksOneProps } from './LooksOne.types';

export const Component = (props: IconsLooksOneProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>looks_one</Default>;
};

export default {
  Component,
};
