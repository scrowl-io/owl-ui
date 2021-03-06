import * as React from 'react';
import { Accordion } from '../index';
import { AccordionDefaultProps } from '../Default.types';

import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';

const items = [
  {
    id: '1',
    label: 'Header 1',
    view: (
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non
          diam eu enim posuere malesuada. Nullam felis nulla, tempus quis lacus
          sed, mollis gravida orci. Nullam turpis justo, suscipit id pretium ut,
          dictum at tellus. Sed facilisis dui nisl, quis blandit enim bibendum
          sit amet. Vestibulum id tortor a lacus suscipit vulputate. Donec et
          felis nisl.
        </p>
      </div>
    ),
  },
  {
    id: '2',
    label: 'Header 2',
    view: (
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="text" name="email" />
        <label htmlFor="phone">Phone:</label>
        <input type="text" name="phone" />
        <label htmlFor="country">Country:</label>
        <input type="text" name="country" />
        <label htmlFor="city">City:</label>
        <input type="text" name="city" />
      </form>
    ),
  },
  {
    id: '3',
    label: 'Header 3',
    view: (
      <div>
        <h2>Build out custom content</h2>
        <img
          src="https://osg.ca/wp-content/uploads/2021/12/greenbook_transparent.png"
          alt="green book by OSG"
        />
      </div>
    ),
  },
];

export const Default = (args: AccordionDefaultProps) => <Accordion {...args} />;

Default.args = {
  size: size.defaultValue,
  theme: theme.defaultValue,
  items: items,
};

Default.argTypes = {
  size,
  theme,
};
