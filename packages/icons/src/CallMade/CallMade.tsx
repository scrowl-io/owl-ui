import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCallMadeProps } from './CallMade.types';

export const Component = (props: IconsCallMadeProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>call_made</Default>;
};

export default {
  Component,
};
