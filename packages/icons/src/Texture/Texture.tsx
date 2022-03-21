import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsTextureProps } from './Texture.types';

export const Component = (props: IconsTextureProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>texture</Default>;
};

export default {
  Component,
};
