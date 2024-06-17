import { Header } from "./components/header/Header";
import { Experience } from "./components/experience/Experience";

import "./styles/Home.scss"
import { Information } from "./components/information/information";



export default function Home() {
  return (
    <main className="container">      
      <Header/> 
      <Experience/>
      <Information/>
        
         <div className="buttons">
          <div className="social"></div>
          <button>contact me</button>
         </div>
        
      
    </main>
  );
}
