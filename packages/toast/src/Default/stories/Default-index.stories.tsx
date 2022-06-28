import * as React from 'react';
import { Toast } from '../index';
import { ToastDefaultProps, ToastContentProps } from '../Default.types';
import { bg } from './Default-bg.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';

const toastContent: ToastContentProps = {
  header: {
    closeLabel: 'This is the close label',
    closeVariant: 'white',
    closeButton: true,
    content: (
      <>
        <h2>Toast Header</h2>
      </>
    ),
  },
  body: {
    content: 'Hello, world! This is a toast message.',
  },
};

export const Default = (args: ToastDefaultProps) => {
  const [showToast, setShowToast] = React.useState(false);

  const toggleShowToast = () => setShowToast(!showToast);

  return (
    <div style={{ width: '50%' }}>
      <button onClick={toggleShowToast}>Toggle Toast</button>
      <Toast {...args} show={showToast} onClose={toggleShowToast} />
    </div>
  );
};

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
