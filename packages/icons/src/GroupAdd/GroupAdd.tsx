import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsGroupAddProps } from './GroupAdd.types';

export const Component = (props: IconsGroupAddProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>group_add</Default>;
};

export default {
  Component,
};
