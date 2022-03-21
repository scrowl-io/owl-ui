import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPhoneInTalkProps } from './PhoneInTalk.types';

export const Component = (props: IconsPhoneInTalkProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>phone_in_talk</Default>;
};

export default {
  Component,
};
