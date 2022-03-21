import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLocalShippingProps } from './LocalShipping.types';

export const Component = (props: IconsLocalShippingProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>local_shipping</Default>;
};

export default {
  Component,
};
