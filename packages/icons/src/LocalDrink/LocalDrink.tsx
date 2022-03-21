import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLocalDrinkProps } from './LocalDrink.types';

export const Component = (props: IconsLocalDrinkProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>local_drink</Default>;
};

export default {
  Component,
};
