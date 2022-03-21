import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLocalPizzaProps } from './LocalPizza.types';

export const Component = (props: IconsLocalPizzaProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>local_pizza</Default>;
};

export default {
  Component,
};
