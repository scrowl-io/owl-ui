import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAssignmentReturnedProps } from './AssignmentReturned.types';

export const Component = (props: IconsAssignmentReturnedProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>assignment_returned</Default>;
};

export default {
  Component,
};
