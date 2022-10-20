import React from 'react';
import { ThemeProvider, Toast as BsToast } from 'react-bootstrap';
import { ToastDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { getClasses, themePrefixesProps } from '../../../../lib/src/utils';

export const Toast = ({
  className,
  pxScale,
  toastContent,
  ...props
}: ToastDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'toast';
  let classes = getClasses({
    module: styleMod,
    base: baseClass,
    modifiers: [
      {
        base: 'PxScale',
        value: pxScale,
      },
    ],
  });

  themePrefixes[baseClass] = `owlui-${baseClass}`;
  themePrefixes[`${baseClass}-header`] = `owlui-${baseClass}-header`;
  themePrefixes[`${baseClass}-body`] = `owlui-${baseClass}-body`;

  if (className) {
    classes += ` ${className}`;
  }

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <BsToast className={classes} {...props}>
        <BsToast.Header {...toastContent?.header}>
          {toastContent?.header.content}
        </BsToast.Header>
        <BsToast.Body {...toastContent?.body}>
          {toastContent?.body.content}
        </BsToast.Body>
      </BsToast>
    </ThemeProvider>
  );
};

export default {
  Toast,
};
