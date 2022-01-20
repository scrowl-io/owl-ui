import * as React from 'react'
import { Button } from '../index'

import { appearance } from './Button-appearance.stories'
import { size } from './Button-size.stories'
import { theme } from './Button-theme.stories'

export const Default = (args) => <Button {...args}>Hello World</Button>

Default.args = {
    appearance: 'primary',
    size: 'large',
    theme: undefined
}

Default.argTypes = {
    appearance,
    size,
    theme
}