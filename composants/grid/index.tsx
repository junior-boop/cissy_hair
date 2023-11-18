import { ContainerProps } from '~/components/type'
import styles from './grid.module.css'

type gridProps = {
    children : any,
    id : string 
}

export default function Grid({children, id} : gridProps){
    return(
        <div id = {id} class={styles.grid}>
            {children}
        </div>
    )
}
export  function Gridtemplate_3({children} : ContainerProps){
    return(
        <div class={styles.grid_3}>
            {children}
        </div>
    )
}