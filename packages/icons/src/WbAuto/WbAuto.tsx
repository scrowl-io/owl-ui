import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsWbAutoProps } from './WbAuto.types';

export const Component = (props: IconsWbAutoProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>wb_auto</Default>;
};

export default {
  Component,
};
