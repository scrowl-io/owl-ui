import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsTurnedInNotProps } from './TurnedInNot.types';

export const Component = (props: IconsTurnedInNotProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>turned_in_not</Default>;
};

export default {
  Component,
};
