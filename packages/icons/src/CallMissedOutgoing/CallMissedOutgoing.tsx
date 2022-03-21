import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCallMissedOutgoingProps } from './CallMissedOutgoing.types';

export const Component = (props: IconsCallMissedOutgoingProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>call_missed_outgoing</Default>;
};

export default {
  Component,
};
