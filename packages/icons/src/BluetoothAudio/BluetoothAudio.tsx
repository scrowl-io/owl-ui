import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBluetoothAudioProps } from './BluetoothAudio.types';

export const Component = (props: IconsBluetoothAudioProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>bluetooth_audio</Default>;
};

export default {
  Component,
};
