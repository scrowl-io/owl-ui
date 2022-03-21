import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsViewCompactProps } from './ViewCompact.types';

export const Component = (props: IconsViewCompactProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>view_compact</Default>;
};

export default {
  Component,
};
