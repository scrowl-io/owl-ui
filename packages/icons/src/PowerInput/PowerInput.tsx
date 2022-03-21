import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPowerInputProps } from './PowerInput.types';

export const Component = (props: IconsPowerInputProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>power_input</Default>;
};

export default {
  Component,
};
