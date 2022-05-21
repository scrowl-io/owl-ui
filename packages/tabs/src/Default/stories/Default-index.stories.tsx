import * as React from 'react';
import { component as Tabs } from '../index';
import { component as TabWrapper } from '../../TabWrapper';
import { component as TabContent } from '../../TabContent';
import { component as TabButton } from '../../TabButton';
import { TabsDefaultProps } from '../Default.types';

import { appearance } from './Default-appearance.stories';
import { theme } from './Default-theme.stories';

export const Default = (args: TabsDefaultProps) => {
  const [selectedItem, setSelectedItem] = React.useState(0);

  const items = [
    {
      id: 1,
      label: 'label 1',
      view: 'content 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      label: 'label 2',
      view: 'content 2 - Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.',
    },
    {
      id: 3,
      label: 'label 3',
      view: 'content 3 - Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    },
  ];

  return (
    <Tabs {...args}>
      <TabWrapper aria-label="Tabbed Navigation">
        {items.map((tabItem, index) => {
          return (
              <TabButton
                key={tabItem.id}
                aria-selected={index === selectedItem}
                className={`owlui-tab-button ${
                  index === selectedItem
                    ? 'owlui-tab-button-active'
                    : 'owlui-tab-button'
                }`}
                onClick={() => setSelectedItem(index)}
              >
                {tabItem.label}
              </TabButton>
          );
        })}
        </TabWrapper>
        <TabContent>
          <h3>{items[selectedItem].label}</h3>
          <p>{items[selectedItem] && items[selectedItem].view}</p>
        </TabContent>
    </Tabs>
  );
};

Default.args = {
  appearance: 'Default',
  theme: 'Default',
};

Default.argTypes = {
  appearance,
  theme,
};
