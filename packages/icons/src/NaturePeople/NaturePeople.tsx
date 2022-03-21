import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsNaturePeopleProps } from './NaturePeople.types';

export const Component = (props: IconsNaturePeopleProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>nature_people</Default>;
};

export default {
  Component,
};
