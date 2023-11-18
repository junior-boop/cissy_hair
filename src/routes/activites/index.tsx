import {Container, Vide, Button} from '~/components';
import styles from './activites.module.css'
// import images from '../../src/images/Eleves.jpg'
import { FlecheGauche } from "~/components/programmeItems/programmeItem";
import { A } from "solid-start";
import { ImageProps } from '~/components/type';


const data = []

export default function Activites(){
    return(
        <div>
            <Header />
            <Container>
                {
                    data.length > 1 
                    ? <ActivitesContaine />
                    :(
                        <div class={styles.contenuvide}>
                            contenu vide
                        </div>
                    )
                }
            </Container>
            
        </div>
    )
}




function ActivitesContaine() {
    return(
        <div class={styles.activity}>
            <div class={styles.content}>
                {/* <ArticlesGrand image={images} name={' Le Lancement des activites de l\'AJEC'} /> */}
                <br />
                <h1>Les activites passe</h1>
                <div>
                    <SimpleArticle image={'/diapos.jpg'} url="/activites/1234"/>
                    <SimpleArticle image={'/diapos.jpg'} />
                    <SimpleArticle image={'/diapos.jpg'} />
                    <SimpleArticle image={'/diapos.jpg'} />
                </div>
            </div>
            <div>
                <ProgrammePlus />
                <ImagesLastProgramme />
            </div>
        </div>
    )
}

function Header(){
    return(
        <section id="header" style={{overflow : 'visible', padding : '3rem 0'}}>
            <Container>
                <div class="h2" style={{color : '#7b24ea', "text-transform" : 'uppercase'}}>Les activités</div>
            </Container>
        </section>
    )
}

type ArticleGrandProps = {
    image : string,
    name : string,
    url? : string 
}

function ArticlesGrand ({image, name, url = '/'} : ArticleGrandProps){
    return(
        <div class={styles.articlesgrand}  style={{"background-image" : `url(${image})`}}>
            <div>
                <A href={url} class={styles.desc}>
                   <p class="p" style={{ "font-size" : '28px', "line-height" : 1, color : 'white', margin : 0}}> {name}
                        <span style={{color : '#CDABF7', display : 'block', 'padding-top' : '12px', "font-size" : '16px'}}> Avoir plus d'information </span>
                   </p>
                   <span style={{width : '42px', height :'42px' , "background-color" : '#7b24ea', display : 'flex', "align-items" : 'center', "justify-content" : 'center', "border-radius" : '50%'}}>
                        <FlecheGauche style ={{ color : 'white', width : '24px', height :'24px', }} />
                    </span>
                </A>
            </div>
        </div>
    )
}


type SimpleArticleProps = {
    image : ImageProps,
    url? : string 
}

function SimpleArticle({image, url = '/'}: SimpleArticleProps){
    return(
        <article class={styles.article}>
            <div>
                <A href={url} class="h3" style={{"font-weight" : '600'}}>
                    le titre de l'article
                </A>
                <div class="p">
                    une breve description de l'article Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vero modi ipsum?
                    <span style={{color : '#7b24ea', display : 'block', 'padding-top' : '12px', "font-size" : '16px'}}>Publier le 03-12-2023 |  Avoir plus d'information </span>
                </div>
            </div>
            <A href={url} class={styles.image} style = {{ "background-image" : `url(${image})`}}>
                    <span style={{width : '42px', height :'42px' , "background-color" : '#7b24ea', display : 'flex', "align-items" : 'center', "justify-content" : 'center', "border-radius" : '50%'}}>
                        <FlecheGauche style ={{ color : 'white', width : '24px', height :'24px', }} />
                    </span>
            </A>
        </article>
    )
}


const ProgrammePlus = () => {
    return(
        <div class={styles.programmeplus}>
            <div style = {{"font-weight" : '500', "line-height" : 1.1, "font-size" : '28px'}}>
                Decouvrez notre Calendrier d'activites de l'annee
            </div>
            <A href="/">
                <button>
                    Programme annuel
                </button>
            </A>
        </div>
    )
}


export const ImagesLastProgramme = () => {
    return(
        <div class={styles.imageslastprogramme}>
            <div style = {{"font-weight" : '500', "line-height" : 1.1, "font-size" : '16px'}}>
                Galerie
            </div>
            <div style = {{"font-weight" : '500', "line-height" : 1.1, "font-size" : '28px'}}>
                Les Images du devenier Evenement
            </div>
            <div class={styles.galleries}>
                <div style={{"background-image" : `url(/diapos.jpg)`}}></div>
                <div style={{"background-image" : `url(/diapos.jpg)`}}></div>
            </div>
        </div>
    )
}
/*
    construire un header en grid
    construire un partie pour les images
    construire un banniere et une gallerie images
*/