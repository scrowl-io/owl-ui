import * as React from 'react'
import { component as Ciceroonboardingcomponent } from '../index'

import { appearance } from './Default-appearance.stories'
import { size } from './Default-size.stories'
import { theme } from './Default-theme.stories'

export const Default = (args) => <Ciceroonboardingcomponent {...args}>Hello World</Ciceroonboardingcomponent>

Default.args = {
    appearance: 'primary',
    size: 'large',
    theme: 'default'
}

Default.argTypes = {
    appearance,
    size,
    theme
}