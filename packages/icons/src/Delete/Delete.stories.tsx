import * as React from 'react'
import { Meta } from '@storybook/react'
import { Component } from './Delete'
import descriptionMd from './Description.md'

export { Delete } from './stories/Delete-index.stories'

export default {
    title: 'Components/Icons/Delete',
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