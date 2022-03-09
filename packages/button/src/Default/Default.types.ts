import React from 'react'

export type DefaultButtonCommons = {
    appearance?: 'Primary' | 'Outline'
    theme?: 'Default' | 'Dark'
    size?: 'Sm' | 'Md' | 'Lg'
    prefix?: string
    children: React.ReactNode
}

export type DefaultButtonProps = Partial<DefaultButtonCommons>