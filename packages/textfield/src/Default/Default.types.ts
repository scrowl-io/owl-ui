export type DefaultTextfieldCommons = {
    appearance?: 'Primary' | 'Outline'
    theme?: 'Default' | 'Dark'
    size?: 'Small' | 'Medium' | 'Large'
    prefix?: string
    children: any
}

export type DefaultTextfieldProps = Partial<DefaultTextfieldCommons>