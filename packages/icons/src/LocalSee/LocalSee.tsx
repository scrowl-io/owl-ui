import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLocalSeeProps } from './LocalSee.types';

export const Component = (props: IconsLocalSeeProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>local_see</Default>;
};

export default {
  Component,
};
