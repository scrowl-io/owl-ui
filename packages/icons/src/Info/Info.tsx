import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsInfoProps } from './Info.types';

export const Component = (props: IconsInfoProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>info</Default>;
};

export default {
  Component,
};
