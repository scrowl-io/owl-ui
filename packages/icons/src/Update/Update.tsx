import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsUpdateProps } from './Update.types';

export const Component = (props: IconsUpdateProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>update</Default>;
};

export default {
  Component,
};
