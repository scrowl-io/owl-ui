import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsViewArrayProps } from './ViewArray.types';

export const Component = (props: IconsViewArrayProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>view_array</Default>;
};

export default {
  Component,
};
