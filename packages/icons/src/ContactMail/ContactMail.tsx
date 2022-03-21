import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsContactMailProps } from './ContactMail.types';

export const Component = (props: IconsContactMailProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>contact_mail</Default>;
};

export default {
  Component,
};
