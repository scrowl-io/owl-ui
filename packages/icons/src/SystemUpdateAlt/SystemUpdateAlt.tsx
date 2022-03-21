import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSystemUpdateAltProps } from './SystemUpdateAlt.types';

export const Component = (props: IconsSystemUpdateAltProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>system_update_alt</Default>;
};

export default {
  Component,
};
