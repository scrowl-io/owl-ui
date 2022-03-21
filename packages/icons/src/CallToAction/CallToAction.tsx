import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCallToActionProps } from './CallToAction.types';

export const Component = (props: IconsCallToActionProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>call_to_action</Default>;
};

export default {
  Component,
};
