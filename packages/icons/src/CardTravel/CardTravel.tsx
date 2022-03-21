import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCardTravelProps } from './CardTravel.types';

export const Component = (props: IconsCardTravelProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>card_travel</Default>;
};

export default {
  Component,
};
