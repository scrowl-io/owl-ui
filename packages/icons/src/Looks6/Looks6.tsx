import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLooks6Props } from './Looks6.types';

export const Component = (props: IconsLooks6Props) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>looks_6</Default>;
};

export default {
  Component,
};
