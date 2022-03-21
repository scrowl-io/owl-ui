import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAssignmentIndProps } from './AssignmentInd.types';

export const Component = (props: IconsAssignmentIndProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>assignment_ind</Default>;
};

export default {
  Component,
};
