import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Information() {
    return (
        <div className="infos">
        <SectionTitle text="Languages" />
        <div className="languages-info">
            <span>EN 🇺🇸 - Intermediate for writing and reading</span>
            <span>PT 🇧🇷 - Native</span>
        </div>
        <SectionTitle text="Education"/>
        <div className="educational-info">
            <span>🎓</span>
            <span>Information System Administration Bachelors - FIJ-Faculadades Integradas de Jacarepaguá/RJ</span>
       </div>  
       </div>
    )
}