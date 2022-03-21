import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLocalGroceryStoreProps } from './LocalGroceryStore.types';

export const Component = (props: IconsLocalGroceryStoreProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>local_grocery_store</Default>;
};

export default {
  Component,
};
