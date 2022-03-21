import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPhoneBluetoothSpeakerProps } from './PhoneBluetoothSpeaker.types';

export const Component = (props: IconsPhoneBluetoothSpeakerProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>phone_bluetooth_speaker</Default>;
};

export default {
  Component,
};
