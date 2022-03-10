import React from 'react'

export type TextfieldDefaultCommons = {
    appearance?: 'Primary' | 'Outline'
    theme?: 'Default' | 'Dark'
    size?: 'Sm' | 'Md' | 'Lg'
    prefix?: string
    children: React.ReactNode
}

export type TextfieldDefaultProps = Partial<TextfieldDefaultCommons> & React.InputHTMLAttributes<HTMLInputElement>