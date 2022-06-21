import * as React from 'react';
import { component as Toast } from '../index';
import { ToastDefaultProps, ToastContentProps } from '../Default.types';
import { bg } from './Default-bg.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';

const toastContent: ToastContentProps = {
  header: {
    closeLabel: 'This is the close label',
    closeVariant: 'white',
    closeButton: true,
  },
  body: {
    bodyText: 'Hello, world! This is a toast message.',
  },
};

export const Default = (args: ToastDefaultProps) => <Toast {...args} />;

Default.args = {
  bg: bg.defaultValue,
  size: size.defaultValue,
  theme: theme.defaultValue,
  toastContent: toastContent,
};

Default.argTypes = {
  bg,
  size,
  theme,
};
