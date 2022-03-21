import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAssignmentTurnedInProps } from './AssignmentTurnedIn.types';

export const Component = (props: IconsAssignmentTurnedInProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>assignment_turned_in</Default>;
};

export default {
  Component,
};
