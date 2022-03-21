import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsVerifiedUserProps } from './VerifiedUser.types';

export const Component = (props: IconsVerifiedUserProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>verified_user</Default>;
};

export default {
  Component,
};
