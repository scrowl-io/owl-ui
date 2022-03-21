import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsTurnedInProps } from './TurnedIn.types';

export const Component = (props: IconsTurnedInProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>turned_in</Default>;
};

export default {
  Component,
};
