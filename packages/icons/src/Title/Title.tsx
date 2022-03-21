import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsTitleProps } from './Title.types';

export const Component = (props: IconsTitleProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>title</Default>;
};

export default {
  Component,
};
