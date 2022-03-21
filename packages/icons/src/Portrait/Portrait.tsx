import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPortraitProps } from './Portrait.types';

export const Component = (props: IconsPortraitProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>portrait</Default>;
};

export default {
  Component,
};
