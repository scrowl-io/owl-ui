import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsRemoveProps } from './Remove.types';

export const Component = (props: IconsRemoveProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>remove</Default>;
};

export default {
  Component,
};
