import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAssignmentLateProps } from './AssignmentLate.types';

export const Component = (props: IconsAssignmentLateProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>assignment_late</Default>;
};

export default {
  Component,
};
