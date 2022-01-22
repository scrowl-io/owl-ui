export type DefaultTextfieldCommons = {
    appearance?: 'primary' | 'outline'
    theme?: 'default' | 'dark'
    size: 'small' | 'medium' | 'large'
    children: any
}

export type DefaultTextfieldProps = Partial<DefaultTextfieldCommons>