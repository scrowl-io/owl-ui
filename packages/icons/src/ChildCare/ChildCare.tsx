import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsChildCareProps } from './ChildCare.types';

export const Component = (props: IconsChildCareProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>child_care</Default>;
};

export default {
  Component,
};
