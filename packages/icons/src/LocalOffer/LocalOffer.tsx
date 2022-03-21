import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLocalOfferProps } from './LocalOffer.types';

export const Component = (props: IconsLocalOfferProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>local_offer</Default>;
};

export default {
  Component,
};
