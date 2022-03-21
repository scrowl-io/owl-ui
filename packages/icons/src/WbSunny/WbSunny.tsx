import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsWbSunnyProps } from './WbSunny.types';

export const Component = (props: IconsWbSunnyProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>wb_sunny</Default>;
};

export default {
  Component,
};
