import { SectionTitle } from "../sectionTitle/section-title";
import "./Experience.scss"

export function Experience(){
    return(
        
        <div className="experience">
           <SectionTitle text="Experience" />
            <p>Atualmente faço dois projetos pessoais e voluntários (01 site de uma casa espírita e 01 site para uma loja online) e também participo de 02 projetos de empreendedorismo em parceria com a Trybe e a Skill Labs, que tem o objetivo de apoiar empresas e empreendedores a desenvolverem suas soluções tecnológicas do zero. No projeto Alice estou no cargo de BackEnd e vamos utilizar Typescript | Firebase. No projeto SoluçõesEdu estou no cargo de FrontEnd e estamos usando React | Firebase.</p>
            <div className="experienceTime">
            </div>
        </div>
     
    )
}
