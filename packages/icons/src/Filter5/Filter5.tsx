import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFilter5Props } from './Filter5.types';

export const Component = (props: IconsFilter5Props) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>filter_5</Default>;
};

export default {
  Component,
};
