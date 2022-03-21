import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPinDropProps } from './PinDrop.types';

export const Component = (props: IconsPinDropProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>pin_drop</Default>;
};

export default {
  Component,
};
