import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsHelpProps } from './Help.types';

export const Component = (props: IconsHelpProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>help</Default>;
};

export default {
  Component,
};
