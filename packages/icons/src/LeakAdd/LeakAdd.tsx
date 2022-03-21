import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLeakAddProps } from './LeakAdd.types';

export const Component = (props: IconsLeakAddProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>leak_add</Default>;
};

export default {
  Component,
};
