import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPresentToAllProps } from './PresentToAll.types';

export const Component = (props: IconsPresentToAllProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>present_to_all</Default>;
};

export default {
  Component,
};
