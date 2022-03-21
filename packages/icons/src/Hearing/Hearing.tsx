import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsHearingProps } from './Hearing.types';

export const Component = (props: IconsHearingProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>hearing</Default>;
};

export default {
  Component,
};
