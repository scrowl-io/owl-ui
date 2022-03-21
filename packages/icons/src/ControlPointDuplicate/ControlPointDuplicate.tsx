import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsControlPointDuplicateProps } from './ControlPointDuplicate.types';

export const Component = (props: IconsControlPointDuplicateProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>control_point_duplicate</Default>;
};

export default {
  Component,
};
