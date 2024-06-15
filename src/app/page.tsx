import { Header } from "./components/header/header";



export default function Home() {
  return (
    <main className="container">      
       <Header/> 
      
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
