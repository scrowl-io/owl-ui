import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsWhatshotProps } from './Whatshot.types';

export const Component = (props: IconsWhatshotProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>whatshot</Default>;
};

export default {
  Component,
};
