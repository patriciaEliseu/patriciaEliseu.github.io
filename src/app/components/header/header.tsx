import Image from "next/image"; 

import "./header.scss";

export function Header(){
    return(
        <div className="header">            
        <div>
            <h1>Olá, Me chamo Patrícia Eliseu!👋</h1>
            <h2>Sou Desenvolvedora Web FullStack</h2>
        </div>
        <Image
              src="/eu2.jpg"
              alt="eu"
              width={215}
              height={237}
              priority
            />
        </div>
       
    )
}