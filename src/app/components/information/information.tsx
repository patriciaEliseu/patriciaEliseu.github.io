import { SectionTitle } from "../sectionTitle/sectio-title"
import "./information.scss"

export function Info(){
    return(
        <div className="infos">
        <SectionTitle text="Languages"/>
        <div className="languages-info">
  <span>🇺🇸 EN - Básico</span>
  <span>🇧🇷 PT-BR - Nativo</span>
  <span>🇪🇸 ES - Básico</span>
</div>
<SectionTitle text="Education"/>
        <div className="educational-info">
          <span>🎓</span>
          <span>Bacharel Administração de Sistema de Informação - FIJ - Faculdades Integradas de Jacarepaguá no Rio de Janeiro</span>
        </div>
      </div>
    )
}
