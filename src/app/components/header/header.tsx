import Image from "next/image"
import "./header.scss"

export default function Header() {
    return (

<div className="header">
      <div>
  <h1>Olá, eu sou a Patrícia Eliseu!</h1>
  <h2>Desenvolvedora de Software</h2>
</div>
<Image
        src="/eu5.png"
        alt="Minha foto"              
        width={300}
        height={330}
        priority
      />
</div>
    )
}