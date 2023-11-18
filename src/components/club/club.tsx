import { A } from '@solidjs/router'
import Container from '../container/container'
import styles from './club.module.css'

import image1  from '/assets/laboratoire_white.png'
import image2  from '/assets/croissance_white.png'
import image3  from '/assets/changement-climatique_white.png'
import image4  from '/assets/maison-ecologique_white.png'
import image5  from '/assets/plumes_white.png'
import image6  from '/assets/sensible_white.png'
import { ClubProps } from '../type'

export default function ClubSection(){
    return(
        <section>
            <Container>
                <div class="h1" style={{color : '#7b24ea', "text-align" : 'center'}}>
                    Nos Differents Clubs
                </div>
                <div class="h1" style={{color : '#7b24ea', "text-align" : 'center'}}>
                    Entrepreneuriaux
                </div>
                <div class={styles.grid_template_3}>
                    <Club image={image1} name={"Agro-industrie et Industrie Chimique (AI/IC)"} />
                    <Club image={image2} name={"Agriculture et Agroforesterie (A/A)"} />
                    <Club image={image3} name={"Environnement et Changements Climatiques (E/CL)"}/>
                    <Club image={image4} name={"Energies Renouvelables (ER)"}/>
                    <Club image={image5} name={"Journal-Poésie-Roman (JPR)"} />
                    <Club image={image6} name={"Numérique (N)"}/>
                </div>
            </Container>
        </section>
    )
}


function Club ({name, image, url = '/'} : ClubProps){
    return(
        <div class={styles.club}>
            <div class={styles.clubContainer}>
                <div style = {{"background-image" : `url(${image})`}}>
                    
                </div>
                <A href={url} style={{width : '70%', "text-decoration" : 'none'}}>
                    <div class="P" style={{color : 'white', "text-align" : 'center', "font-size" : '20px'}}>{name}</div>
                </A>
            </div>
        </div>
    )
}