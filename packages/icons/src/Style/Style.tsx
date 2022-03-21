import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsStyleProps } from './Style.types';

export const Component = (props: IconsStyleProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>style</Default>;
};

export default {
  Component,
};
