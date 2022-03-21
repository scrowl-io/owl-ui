import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLocalActivityProps } from './LocalActivity.types';

export const Component = (props: IconsLocalActivityProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>local_activity</Default>;
};

export default {
  Component,
};
