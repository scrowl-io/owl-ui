import * as React from 'react';
import { ThemeProvider } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { TabsDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/utils';

export const Component = (props: TabsDefaultProps) => {
  const baseClass = 'navTabs';
  const activeClass = 'owlui-active';
  const { items } = props;
  const prefix = props.prefix || '';
  const selectedItemId = props.selectedItemId
    ? props.selectedItemId.toString()
    : items[0].id || 0;
  const componentId = React.useId().replace(/:/g, '-');

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
    ['prefix', 'theme', 'appearance', 'size', 'items', 'selectedItemId']
  );

  const [activeKey, setActiveKey] = React.useState<string>(
    selectedItemId.toString()
  );

  const selectTab = function (
    eventKey: string | number | null,
    event: React.SyntheticEvent<unknown, Event>
  ) {
    if (!eventKey) return;

    setActiveKey(eventKey.toString());

    window.requestAnimationFrame(() => {
      if (event.target instanceof Element) {
        event.target.classList.add(activeClass);
      }
    });
  };

  React.useEffect(function () {
    const selector = `#${componentId} .owlui-nav-item > .active`;
    const activeTab: HTMLElement | null = document.querySelector(selector);

    if (activeTab instanceof Element === false) return;

    activeTab?.classList.add(activeClass);
  }, []);

  return (
    <div id={componentId}>
      <ThemeProvider
        prefixes={{
          nav: 'owlui-nav',
          'tab-content': 'owlui-tab-content',
          'nav-tabs': 'owlui-nav-tabs',
          'nav-item': 'owlui-nav-item',
          'nav-link': 'owlui-nav-link',
          tab: 'owlui-tab',
          'tab-pane': 'owlui-tab-pane',
        }}
      >
        <Tabs activeKey={activeKey} onSelect={selectTab} {...locals}>
          {items.map((item, index) => {
            const itemKey = item.id || index;

            return (
              <Tab
                className={activeKey === itemKey ? 'owlui-active' : ''}
                key={itemKey}
                eventKey={item.id}
                title={item.label}
              >
                {item.view}
              </Tab>
            );
          })}
        </Tabs>
      </ThemeProvider>
    </div>
  );
};

export default {
  Component,
};
