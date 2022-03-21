import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAssignmentProps } from './Assignment.types';

export const Component = (props: IconsAssignmentProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>assignment</Default>;
};

export default {
  Component,
};
