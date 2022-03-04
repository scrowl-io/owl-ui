export type DefaultButtonCommons = {
    appearance?: 'Primary' | 'Outline'
    theme?: 'Default' | 'Dark'
    size?: 'Small' | 'Medium' | 'Large'
    prefix?: string
    children: any
}

export type DefaultButtonProps = Partial<DefaultButtonCommons>