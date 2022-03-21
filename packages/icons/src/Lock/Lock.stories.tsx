import * as React from 'react'
import { Meta } from '@storybook/react'
import { Component } from './Lock'
import descriptionMd from './Description.md'

export { Lock } from './stories/Lock-index.stories'

export default {
    title: 'Components/Icons/Lock',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: [
                    descriptionMd
                ].join('/n')
            }
        }
    },
    decorators: [
        Story => (
            <div style={{
                display: 'flex',
                justifyContent: 'space-evenly'
            }}>
                <Story />
            </div>
        )
    ]
} as Meta