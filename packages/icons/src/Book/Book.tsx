import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBookProps } from './Book.types';

export const Component = (props: IconsBookProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>book</Default>;
};

export default {
  Component,
};
