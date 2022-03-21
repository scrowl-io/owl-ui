import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsMonetizationOnProps } from './MonetizationOn.types';

export const Component = (props: IconsMonetizationOnProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>monetization_on</Default>;
};

export default {
  Component,
};
