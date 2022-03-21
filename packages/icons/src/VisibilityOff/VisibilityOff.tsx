import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsVisibilityOffProps } from './VisibilityOff.types';

export const Component = (props: IconsVisibilityOffProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>visibility_off</Default>;
};

export default {
  Component,
};
