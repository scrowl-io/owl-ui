import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsStarsProps } from './Stars.types';

export const Component = (props: IconsStarsProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>stars</Default>;
};

export default {
  Component,
};
