import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsVisibilityProps } from './Visibility.types';

export const Component = (props: IconsVisibilityProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>visibility</Default>;
};

export default {
  Component,
};
