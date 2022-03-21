import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsOpenInNewProps } from './OpenInNew.types';

export const Component = (props: IconsOpenInNewProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>open_in_new</Default>;
};

export default {
  Component,
};
