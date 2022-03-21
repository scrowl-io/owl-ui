import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPeopleProps } from './People.types';

export const Component = (props: IconsPeopleProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>people</Default>;
};

export default {
  Component,
};
