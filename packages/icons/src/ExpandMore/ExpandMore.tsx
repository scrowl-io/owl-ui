import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsExpandMoreProps } from './ExpandMore.types';

export const Component = (props: IconsExpandMoreProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>expand_more</Default>;
};

export default {
  Component,
};
