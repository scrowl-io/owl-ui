import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLensProps } from './Lens.types';

export const Component = (props: IconsLensProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>lens</Default>;
};

export default {
  Component,
};
