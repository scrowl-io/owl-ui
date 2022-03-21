import * as React from 'react'
import { component as Icons } from '../index'
import { IconsDeleteProps } from '../Delete.types'

import { appearance } from './Delete-appearance.stories'
import { size } from './Delete-size.stories'
import { theme } from './Delete-theme.stories'

export const Delete = (args: IconsDeleteProps) => <Icons {...args}>Hello World</Icons>

Delete.args = {
    appearance: 'Primary',
    size: 'Lg',
    theme: 'Default'
}

Delete.argTypes = {
    appearance,
    size,
    theme
}