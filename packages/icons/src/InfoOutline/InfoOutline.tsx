import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsInfoOutlineProps } from './InfoOutline.types';

export const Component = (props: IconsInfoOutlineProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>info_outline</Default>;
};

export default {
  Component,
};
