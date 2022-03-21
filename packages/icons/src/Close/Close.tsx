import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCloseProps } from './Close.types';

export const Component = (props: IconsCloseProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>close</Default>;
};

export default {
  Component,
};
