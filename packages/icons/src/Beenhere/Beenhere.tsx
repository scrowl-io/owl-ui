import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBeenhereProps } from './Beenhere.types';

export const Component = (props: IconsBeenhereProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>beenhere</Default>;
};

export default {
  Component,
};
