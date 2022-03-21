import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPauseProps } from './Pause.types';

export const Component = (props: IconsPauseProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>pause</Default>;
};

export default {
  Component,
};
