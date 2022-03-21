import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAssignmentReturnProps } from './AssignmentReturn.types';

export const Component = (props: IconsAssignmentReturnProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>assignment_return</Default>;
};

export default {
  Component,
};
