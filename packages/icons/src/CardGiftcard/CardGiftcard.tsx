import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCardGiftcardProps } from './CardGiftcard.types';

export const Component = (props: IconsCardGiftcardProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>card_giftcard</Default>;
};

export default {
  Component,
};
