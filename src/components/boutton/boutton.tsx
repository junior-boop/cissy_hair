import { A } from "@solidjs/router"
import styles from './boutton.module.css'
import { ButtonProps } from "../type"



export default function Button({children, style} : ButtonProps){

    return (
        <A href="/" class={styles.button} style = {style}>{children}</A>
    )
}