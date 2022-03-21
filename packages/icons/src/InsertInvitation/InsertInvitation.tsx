import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsInsertInvitationProps } from './InsertInvitation.types';

export const Component = (props: IconsInsertInvitationProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>insert_invitation</Default>;
};

export default {
  Component,
};
