import React from 'react'

export type DefaultTextfieldCommons = {
    appearance?: 'Primary' | 'Outline'
    theme?: 'Default' | 'Dark'
    size?: 'Sm' | 'Md' | 'Lg'
    prefix?: string
    children: React.ReactNode
}

export type DefaultTextfieldProps = Partial<DefaultTextfieldCommons>