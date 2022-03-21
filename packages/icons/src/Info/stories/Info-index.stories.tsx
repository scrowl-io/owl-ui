import * as React from 'react'
import { component as Icons } from '../index'
import { IconsInfoProps } from '../Info.types'

import { appearance } from './Info-appearance.stories'
import { size } from './Info-size.stories'
import { theme } from './Info-theme.stories'

export const Info = (args: IconsInfoProps) => <Icons {...args}>Hello World</Icons>

Info.args = {
    appearance: 'Primary',
    size: 'Lg',
    theme: 'Default'
}

Info.argTypes = {
    appearance,
    size,
    theme
}