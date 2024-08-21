import Image from "next/image";
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
        <button>Entre em contato</button>
      </div>
           
        
    </main>
  );
}
