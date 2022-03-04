export type DefaultButtonCommons = {
    appearance?: 'Primary' | 'Outline'
    theme?: 'Default' | 'Dark'
    size?: 'Sm' | 'Md' | 'Lg'
    prefix?: string
    children: any
}

export type DefaultButtonProps = Partial<DefaultButtonCommons>