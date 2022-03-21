import * as React from 'react'
import { component as Icons } from '../index'
import { IconsDoneProps } from '../Done.types'

import { appearance } from './Done-appearance.stories'
import { size } from './Done-size.stories'
import { theme } from './Done-theme.stories'

export const Done = (args: IconsDoneProps) => <Icons {...args}>Hello World</Icons>

Done.args = {
    appearance: 'Primary',
    size: 'Lg',
    theme: 'Default'
}

Done.argTypes = {
    appearance,
    size,
    theme
}