import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsGifProps } from './Gif.types';

export const Component = (props: IconsGifProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>gif</Default>;
};

export default {
  Component,
};
