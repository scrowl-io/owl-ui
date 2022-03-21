import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPlusOneProps } from './PlusOne.types';

export const Component = (props: IconsPlusOneProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>plus_one</Default>;
};

export default {
  Component,
};
