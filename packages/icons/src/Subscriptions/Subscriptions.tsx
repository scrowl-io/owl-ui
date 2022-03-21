import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSubscriptionsProps } from './Subscriptions.types';

export const Component = (props: IconsSubscriptionsProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>subscriptions</Default>;
};

export default {
  Component,
};
