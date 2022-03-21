import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsStayCurrentLandscapeProps } from './StayCurrentLandscape.types';

export const Component = (props: IconsStayCurrentLandscapeProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>stay_current_landscape</Default>;
};

export default {
  Component,
};
