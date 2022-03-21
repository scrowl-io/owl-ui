import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsThumbsUpDownProps } from './ThumbsUpDown.types';

export const Component = (props: IconsThumbsUpDownProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>thumbs_up_down</Default>;
};

export default {
  Component,
};
