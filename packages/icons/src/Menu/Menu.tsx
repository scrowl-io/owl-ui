import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsMenuProps } from './Menu.types';

export const Component = (props: IconsMenuProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>menu</Default>;
};

export default {
  Component,
};
