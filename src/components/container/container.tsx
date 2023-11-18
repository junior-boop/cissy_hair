import styles from './container.module.css'
import { ContainerProps } from '../type'

export default function Container({children} : ContainerProps){
    return(
        <div class={styles.container}>
            {children}
        </div>
    )
}