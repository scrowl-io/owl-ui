import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsOpenWithProps } from './OpenWith.types';

export const Component = (props: IconsOpenWithProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>open_with</Default>;
};

export default {
  Component,
};
