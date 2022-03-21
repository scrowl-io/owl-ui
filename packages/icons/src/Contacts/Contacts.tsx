import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsContactsProps } from './Contacts.types';

export const Component = (props: IconsContactsProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>contacts</Default>;
};

export default {
  Component,
};
