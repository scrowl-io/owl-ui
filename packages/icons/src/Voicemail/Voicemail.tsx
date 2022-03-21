import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsVoicemailProps } from './Voicemail.types';

export const Component = (props: IconsVoicemailProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>voicemail</Default>;
};

export default {
  Component,
};
