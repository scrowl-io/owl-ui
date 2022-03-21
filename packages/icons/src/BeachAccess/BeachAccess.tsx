import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBeachAccessProps } from './BeachAccess.types';

export const Component = (props: IconsBeachAccessProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>beach_access</Default>;
};

export default {
  Component,
};
