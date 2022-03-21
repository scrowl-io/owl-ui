import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSchoolProps } from './School.types';

export const Component = (props: IconsSchoolProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>school</Default>;
};

export default {
  Component,
};
