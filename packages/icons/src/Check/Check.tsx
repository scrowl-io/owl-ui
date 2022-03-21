import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCheckProps } from './Check.types';

export const Component = (props: IconsCheckProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>check</Default>;
};

export default {
  Component,
};
