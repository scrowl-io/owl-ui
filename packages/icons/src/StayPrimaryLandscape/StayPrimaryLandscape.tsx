import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsStayPrimaryLandscapeProps } from './StayPrimaryLandscape.types';

export const Component = (props: IconsStayPrimaryLandscapeProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>stay_primary_landscape</Default>;
};

export default {
  Component,
};
