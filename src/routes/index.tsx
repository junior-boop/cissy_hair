import { ClubSection, Diapo_2, Programme, Vision } from "~/components";
import Header from "~/components/header_home/header";

export default function Accueil(){
    return(
        <div>
            <Header />
            <Vision />
            <Programme />
            <Diapo_2 image={'/diapos.jpg'} />
            <ClubSection />
        </div>
    )
}