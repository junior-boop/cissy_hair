import * as solid from 'solid-js'

export interface ContainerProps {
    children : any
}

export interface ButtonProps {
    children : any,
    style? : string | undefined
}

export interface ProgramItemProps {
    abr : string,
    name : string,
    image?: string,
    url? : string
}

export interface ImageProps {
    image : string
}

export interface ClubProps {
    name : string,
    image : ImageProps,
    url? : string
}

export type SVGProps = SVGElementTagNameMap