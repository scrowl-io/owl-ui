import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLooks4Props } from './Looks4.types';

export const Component = (props: IconsLooks4Props) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>looks_4</Default>;
};

export default {
  Component,
};
