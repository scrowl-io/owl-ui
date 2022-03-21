import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsThumbDownProps } from './ThumbDown.types';

export const Component = (props: IconsThumbDownProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>thumb_down</Default>;
};

export default {
  Component,
};
