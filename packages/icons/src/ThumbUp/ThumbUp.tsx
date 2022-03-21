import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsThumbUpProps } from './ThumbUp.types';

export const Component = (props: IconsThumbUpProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>thumb_up</Default>;
};

export default {
  Component,
};
