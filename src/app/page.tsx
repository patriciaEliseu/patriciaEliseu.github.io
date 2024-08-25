
import Header from "./components/header/header";
import {Experience} from "./components/experience/experience";
import {Info} from "./components/information/information";
import "./styles/home.scss"
import { SocialBtns } from "./components/social-btns/social-btns";

export default function Home() {
  return (
    <main className="container">
      <Header/>
      <Experience/>
      <Info/>
     
      <div className="buttons">
        <SocialBtns/>
        <a className="btn-primary" href="zap: (19) 98234-1686">
          Entre em contato
        </a>
      </div>
           
        
    </main>
  );
}
