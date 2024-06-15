import Image from "next/image";


export default function Home() {
  return (
    <main>      
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div>
          <h1>Olá, Me chamo Patrícia Eliseu!👋</h1>
          <h2>Sou Desenvolvedora Web FullStack</h2>
        </div>
       <div className="experience">
        <h3>Experience</h3>
        <div className="experienceTime">
          <p></p>
        </div>
        <div className="infos">
          <h3>Languages</h3>
          <div className="languages-info">
            <span>EN 🇺🇸 - Intermediate for writing and reading</span>
            <span>PT 🇧🇷 - Native</span>
          </div>
          <h3>Education</h3>
         <div className="educational-info">
          <span>🎓</span>
          <span>Information System Administration Bachelor - FIJ-Faculadades Integradas de Jacarepaguá/RJ</span>
         </div>
         <div className="buttons">
          <div className="social"></div>
          <button>contact me</button>
         </div>
        </div>
       </div>
    </main>
  );
}
