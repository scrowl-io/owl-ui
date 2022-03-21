import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsTocProps } from './Toc.types';

export const Component = (props: IconsTocProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>toc</Default>;
};

export default {
  Component,
};
