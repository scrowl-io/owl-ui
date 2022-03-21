import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDoNotDisturbOnProps } from './DoNotDisturbOn.types';

export const Component = (props: IconsDoNotDisturbOnProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>do_not_disturb_on</Default>;
};

export default {
  Component,
};
