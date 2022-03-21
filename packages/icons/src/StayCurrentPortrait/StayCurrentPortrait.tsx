import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsStayCurrentPortraitProps } from './StayCurrentPortrait.types';

export const Component = (props: IconsStayCurrentPortraitProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>stay_current_portrait</Default>;
};

export default {
  Component,
};
