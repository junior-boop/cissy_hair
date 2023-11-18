import styles from './container.module.css'

type ContainerProps = {
    children : any
}

export default function Container({children} : ContainerProps){
    return(
        <div class={styles.container}>
            {children}
        </div>
    )
}