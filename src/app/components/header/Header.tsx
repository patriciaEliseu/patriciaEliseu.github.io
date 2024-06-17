import Image from "next/image"; 

import "./Header.scss";

export function Header(){
    return(
        <div className="header">            
        <div>
            <h1>Olá, Me chamo Patrícia Eliseu! 👋</h1> 
            <h2>Sou Desenvolvedora Web FullStack</h2>
        </div>
        <Image
              src="/eu5.png"
              alt="eu"
              width={150}
              height={237}
              priority
            />
        </div>
       
    )
}