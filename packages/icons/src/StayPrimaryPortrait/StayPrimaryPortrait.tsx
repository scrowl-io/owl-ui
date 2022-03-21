import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsStayPrimaryPortraitProps } from './StayPrimaryPortrait.types';

export const Component = (props: IconsStayPrimaryPortraitProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>stay_primary_portrait</Default>;
};

export default {
  Component,
};
