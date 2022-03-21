import * as React from 'react'
import { component as Icons } from '../index'
import { IconsLockProps } from '../Lock.types'

import { appearance } from './Lock-appearance.stories'
import { size } from './Lock-size.stories'
import { theme } from './Lock-theme.stories'

export const Lock = (args: IconsLockProps) => <Icons {...args}>Hello World</Icons>

Lock.args = {
    appearance: 'Primary',
    size: 'Lg',
    theme: 'Default'
}

Lock.argTypes = {
    appearance,
    size,
    theme
}