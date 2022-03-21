import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsViewComfyProps } from './ViewComfy.types';

export const Component = (props: IconsViewComfyProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>view_comfy</Default>;
};

export default {
  Component,
};
