import Image from "next/image";
import Header from "./components/header/header";
import Experience from "./components/experience/experience";
import Languages from "./components/languages/languages";
import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container">
     <Header/>
      <Experience/>
      <Languages/>
     
        <h3>Educação</h3>
        <div className="education">
          <span>🎓</span>
        <span>Texto sobre onde Estudei</span>
      </div>
      <div className="buttons">
        <div className="social"></div>
        <button>Entre em contato</button>
      </div>
           
        
    </main>
  );
}
