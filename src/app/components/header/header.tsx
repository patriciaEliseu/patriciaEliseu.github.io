import Image from "next/image"
import "./header.scss"

export default function Header() {
    return (

<div className="header">
      <div>
  <h1>Olá, meu nome é Patrícia Eliseu!👋</h1>
  <h2>Desenvolvedora de Software</h2>
</div>
<Image
        src="/eu5.png"
        alt="Minha foto"              
        width={275}
        height={300}
        priority
      />
</div>
    )
}