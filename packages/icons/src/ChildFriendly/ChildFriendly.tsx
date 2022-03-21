import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsChildFriendlyProps } from './ChildFriendly.types';

export const Component = (props: IconsChildFriendlyProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>child_friendly</Default>;
};

export default {
  Component,
};
