import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPeopleOutlineProps } from './PeopleOutline.types';

export const Component = (props: IconsPeopleOutlineProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>people_outline</Default>;
};

export default {
  Component,
};
