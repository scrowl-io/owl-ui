import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsNatureProps } from './Nature.types';

export const Component = (props: IconsNatureProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>nature</Default>;
};

export default {
  Component,
};
