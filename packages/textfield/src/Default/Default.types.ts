export type DefaultTextfieldCommons = {
    appearance?: 'Primary' | 'Outline'
    theme?: 'Default' | 'Dark'
    size?: 'Sm' | 'Md' | 'Lg'
    prefix?: string
    children: any
}

export type DefaultTextfieldProps = Partial<DefaultTextfieldCommons>