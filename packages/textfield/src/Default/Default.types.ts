export type DefaultTextfieldCommons = {
    appearance?: 'primary' | 'outline'
    theme?: 'default' | 'dark'
    size: 'small' | 'medium' | 'large'
    scope?: string
    children: any
}

export type DefaultTextfieldProps = Partial<DefaultTextfieldCommons>