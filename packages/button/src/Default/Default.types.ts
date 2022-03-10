import React from 'react'

export type ButtonDefaultCommons = {
    appearance?: 'Primary' | 'Outline'
    theme?: 'Default' | 'Dark'
    size?: 'Sm' | 'Md' | 'Lg'
    prefix?: string
    children: React.ReactNode
}

export type ButtonDefaultProps = Partial<ButtonDefaultCommons> & React.ButtonHTMLAttributes<HTMLButtonElement>