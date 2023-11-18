import { A } from "@solidjs/router"
import styles from './boutton.module.css'
import { ContainerProps } from "~/components/type"

export default function Button({children} : ContainerProps){

    return (
        <A href="/" class={styles.button}>{children}</A>
    )
}