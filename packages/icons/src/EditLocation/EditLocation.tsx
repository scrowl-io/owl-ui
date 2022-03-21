import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsEditLocationProps } from './EditLocation.types';

export const Component = (props: IconsEditLocationProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>edit_location</Default>;
};

export default {
  Component,
};
