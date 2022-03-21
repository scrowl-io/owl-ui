import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAddLocationProps } from './AddLocation.types';

export const Component = (props: IconsAddLocationProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>add_location</Default>;
};

export default {
  Component,
};
