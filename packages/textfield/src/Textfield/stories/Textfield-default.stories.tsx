import * as React from 'react'
import { Textfield } from '../index'

import { appearance } from './Textfield-appearance.stories'
import { size } from './Textfield-size.stories'
import { theme } from './Textfield-theme.stories'

export const Default = (args) => <Textfield {...args} />

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