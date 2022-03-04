import * as React from 'react'
import { component as Button } from '../index'

import { appearance } from './Default-appearance.stories'
import { size } from './Default-size.stories'
import { theme } from './Default-theme.stories'

export const Default = (args) => <Button {...args}>Hello World</Button>

Default.args = {
    appearance: 'Primary',
    size: 'Lg',
    theme: 'Default'
}

Default.argTypes = {
    appearance,
    size,
    theme
}