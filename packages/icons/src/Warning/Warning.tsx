import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsWarningProps } from './Warning.types';

export const Component = (props: IconsWarningProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>warning</Default>;
};

export default {
  Component,
};
