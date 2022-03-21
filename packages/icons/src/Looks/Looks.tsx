import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLooksProps } from './Looks.types';

export const Component = (props: IconsLooksProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>looks</Default>;
};

export default {
  Component,
};
