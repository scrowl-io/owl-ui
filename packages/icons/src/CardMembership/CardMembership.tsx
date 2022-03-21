import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCardMembershipProps } from './CardMembership.types';

export const Component = (props: IconsCardMembershipProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>card_membership</Default>;
};

export default {
  Component,
};
