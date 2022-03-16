import React from 'react'

export type CardDefaultCommons = {
  appearance?: 'Primary' | 'Outline'
  theme?: 'Default' | 'Dark'
  size?: 'Sm' | 'Md' | 'Lg'
  prefix?: string
  children: React.ReactNode
}

export type CardDefaultProps = Partial<CardDefaultCommons> & React.DivHTMLAttributes<HTMLDivElement>