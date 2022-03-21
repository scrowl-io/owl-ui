import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsConfirmationNumberProps } from './ConfirmationNumber.types';

export const Component = (props: IconsConfirmationNumberProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>confirmation_number</Default>;
};

export default {
  Component,
};
