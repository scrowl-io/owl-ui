import React, { useState } from 'react';
import { ThemeProvider } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { TabsDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/utils';

export const Component = (props: TabsDefaultProps) => {
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
            fields: ['size'],
            value: 'Size',
          },
        ],
      },
    },
    ['prefix', 'theme', 'appearance', 'size', 'items']
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
      <Tabs
        activeKey={activeKey}
        onSelect={key => setActiveKey(key?.toString())}
        {...locals}
      >
        {items.map((item, index) => {
          const itemKey = item.id || index;

          return (
            <Tab key={itemKey} eventKey={item.id} title={item.title}>
              {item.view}
            </Tab>
          );
        })}
      </Tabs>
    </ThemeProvider>
  );
};

export default {
  Component,
};
