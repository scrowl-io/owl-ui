import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsImageProps } from './Image.types';

export const Component = (props: IconsImageProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>image</Default>;
};

export default {
  Component,
};
