import Image from "next/image"
import { SectionTitle } from "../sectionTitle/sectio-title"

import "./experience.scss"
import { Skill } from "../skill/skill"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experience"/>
          <p>Trabalho com estas linguagens menos de 01 ano.</p>
          <div className="experience-time">
            <Skill image="/react.png" measure={1} years="1 year"/>
            <Skill image="/typescript.png" measure={1} years="1 year"/>
            <Skill image="/js.png" measure={1} years="1 year"/>
            <Skill image="/java1.png" measure={1} years="1 year"/>
            <Skill image="/docker.png" measure={1} years="1 year"/>
            <Skill image="/node.png" measure={1} years="1 year"/>
          </div>
        </div>
    )
}