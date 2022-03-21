import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsTonalityProps } from './Tonality.types';

export const Component = (props: IconsTonalityProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>tonality</Default>;
};

export default {
  Component,
};
