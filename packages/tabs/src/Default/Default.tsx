import React, { useState } from 'react';
import { ThemeProvider, Tab as BsTab, Tabs as BsTabs } from 'react-bootstrap';
import { TabsDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { getClasses, themePrefixesProps } from '../../../../lib/src/utils';

export const Tabs = ({
  className,
  pxScale,
  items,
  defaultActiveKey,
  ...props
}: TabsDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'nav';
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
  const [activeKey, setActiveKey] = useState<string | undefined>(
    defaultActiveKey as string
  );

  themePrefixes[baseClass] = `owlui-${baseClass}`;
  themePrefixes['nav-tabs'] = `owlui-${baseClass}-tabs`;
  themePrefixes['nav-item'] = `owlui-${baseClass}-item`;
  themePrefixes['nav-link'] = `owlui-${baseClass}-link`;
  themePrefixes['tab-pane'] = `owlui-tab-pane`;
  themePrefixes['tab-content'] = `owlui-tab-content`;

  if (className) {
    classes += ` ${className}`;
  }

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <BsTabs
        activeKey={activeKey}
        onSelect={key => setActiveKey(key?.toString())}
        className={classes}
        {...props}
      >
        {items.map((item, index) => {
          const itemKey = item.id || index;

          return (
            <BsTab key={itemKey} eventKey={item.id} title={item.title}>
              {item.view}
            </BsTab>
          );
        })}
      </BsTabs>
    </ThemeProvider>
  );
};

export default {
  Tabs,
};
