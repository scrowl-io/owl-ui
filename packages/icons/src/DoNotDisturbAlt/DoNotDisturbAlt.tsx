import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDoNotDisturbAltProps } from './DoNotDisturbAlt.types';

export const Component = (props: IconsDoNotDisturbAltProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>do_not_disturb_alt</Default>;
};

export default {
  Component,
};
