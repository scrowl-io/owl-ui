import * as React from 'react';
import { component as Tabs } from '../index';
import { TabsDarkProps } from '../Dark.types';
import { component as TabItem } from '../../TabItem';
import { component as TabWrapper } from '../../TabWrapper';
import { component as TabContent } from '../../TabContent';
import { component as TabButton } from '../../TabButton';
import { appearance } from './Dark-appearance.stories';
import { size } from './Dark-size.stories';
import { theme } from './Dark-theme.stories';

export const Dark = (args: TabsDarkProps) => {
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
              tab-index={index !== selectedItem ? -1 : ''}
              key={tabItem.id}
              aria-selected={index === selectedItem}
              className={`owlui-tab-button owlui-tab-button-dark ${
                index === selectedItem ? 'owlui-tab-button-dark-active' : ''
              }`}
              onClick={() => setSelectedItem(index)}
            >
              {tabItem.label}
            </TabButton>
          );
        })}
      </TabWrapper>
      <TabContent className="owlui-tab-content-dark">
        <h3>{items[selectedItem].label}</h3>

        <p>{items[selectedItem] && items[selectedItem].view}</p>
      </TabContent>
    </Tabs>
  );
};

Dark.args = {
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Dark.argTypes = {
  appearance,
  size,
  theme,
};


// Args can be props that are passed down representing className for the component to be styled in the sass file

// example: tabItemDarkClass = "tab-item-dark"

// The above class would be implented on the dark toggle