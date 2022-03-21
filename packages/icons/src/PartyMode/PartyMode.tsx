import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPartyModeProps } from './PartyMode.types';

export const Component = (props: IconsPartyModeProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>party_mode</Default>;
};

export default {
  Component,
};
