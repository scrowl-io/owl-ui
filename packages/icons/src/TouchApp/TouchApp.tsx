import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsTouchAppProps } from './TouchApp.types';

export const Component = (props: IconsTouchAppProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>touch_app</Default>;
};

export default {
  Component,
};
