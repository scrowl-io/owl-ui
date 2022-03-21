import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsExtensionProps } from './Extension.types';

export const Component = (props: IconsExtensionProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>extension</Default>;
};

export default {
  Component,
};
