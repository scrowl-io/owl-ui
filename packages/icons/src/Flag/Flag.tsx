import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFlagProps } from './Flag.types';

export const Component = (props: IconsFlagProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>flag</Default>;
};

export default {
  Component,
};
