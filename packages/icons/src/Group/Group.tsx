import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsGroupProps } from './Group.types';

export const Component = (props: IconsGroupProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>group</Default>;
};

export default {
  Component,
};
