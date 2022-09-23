import React, { useState } from 'react';
import { ThemeProvider, Tab as BsTab, Tabs as BsTabs } from 'react-bootstrap';
import { TabsDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '../../../../lib/src/utils';

export const Tabs = (props: TabsDefaultProps) => {
  const baseClass = 'navTabs';
  const { items, defaultActiveKey } = props;
  const prefix = props.prefix || '';
  const [activeKey, setActiveKey] = useState<string | undefined>(
    defaultActiveKey as string
  );
  const locals = createLocalProps(
    props,
    {
      module: styleMod,
      classes: {
        base: baseClass,
        prefix: prefix,
        optionals: [
          {
            fields: ['theme'],
            value: 'theme',
          },
          {
            fields: ['pxScale'],
            value: 'PxScale',
          },
        ],
      },
    },
    ['prefix', 'theme', 'appearance', 'pxScale', 'items']
  );

  return (
    <ThemeProvider
      prefixes={{
        nav: 'owlui-nav',
        'nav-tabs': 'owlui-nav-tabs',
        'nav-item': 'owlui-nav-item',
        'nav-link': 'owlui-nav-link',
        'tab-content': 'owlui-tab-content',
        'tab-pane': 'owlui-tab-pane',
      }}
    >
      <BsTabs
        activeKey={activeKey}
        onSelect={key => setActiveKey(key?.toString())}
        {...locals}
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
