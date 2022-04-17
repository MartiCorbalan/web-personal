import Header from "/components/header";
import Footer from "/components/footer";
import { useState } from "react";
import { motion } from "framer-motion";
export default function ExperienciaLaboral() {
  const experienceItems = [
    {
      titol: "Desenvolupador Web (pràctiques)",
      lloc: "Extreme Micro (Mataró)",
      data: "Març 2021 - Juny 2021",
      description: (
        <ul className="text-lg">
          <li>- Desenvolupament Web</li>
          <li>- ERP (Odoo) </li>
          <li>- WordPress </li>
        </ul>
      ),
    },
    {
      titol: "Tècnic informàtic (pràctiques)",
      lloc: "Megastore Datasystem (Mataró)",
      data: "Octubre 2017 - Gener 2018",
      description: (
        <ul className="text-lg">
          <li>- Suport tant en Hardware com en Software</li>
          <li>
            - Instal·lació, manteniment i reparació d-ordinadors i impresores.{" "}
          </li>
        </ul>
      ),
    },
    {
      titol: "Desenvolupador Web",
      lloc: "La Volta Mataró",
      description: (
        <ul className="text-lg">
          <li>
            - Actualització completa de la pàgina web i manteniment de la
            mateixa
          </li>
        </ul>
      ),
      link: "http://www.lavoltamataro.cat/",
    },
    {
      titol: "Desenvolupador Web ",
      lloc: "Tecnotrade Group",
      description: (
        <ul className="text-lg">
          <li>- Actualització completa de la pàgina web</li>
        </ul>
      ),
      link: "https://tecnotradegroup.com/",
    },
    {
      titol: "Desenvolupador Web ",
      lloc: "Dea Essence",
      description: (
        <ul className="text-lg">
          <li>
            - Actualització i maquetació completa de la pàgina web i manteniment
            de la mateixa
          </li>
        </ul>
      ),
      link: "https://deaessence.com/",
    },
    {
      titol: "Desenvolupador Web ",
      lloc: "Saed",
      description: (
        <ul>
          <li>- Actualització i maquetació completa de la pàgina web</li>
        </ul>
      ),
      link: "https://web.saedpv.com/",
    },
  ];

  const [actual, setActual] = useState(0);

  const next = () => {
  
    if (actual >= experienceItems.length - 1) {
      setActual(0);
    } else {
      setActual((n) => n + 1);
    }
  };

  const last = () => {
    if (actual <= 0) {
      setActual(experienceItems.length - 1);
    } else {
      setActual(actual - 1);
    }
  };
  const act = (m) => {
    setActual(m);
  };
  return (
    <>
      
      <div className="w-full min-h-screen  p-[50px] text-[#e2e2e2]">
     
       
        
          
        <div className=" text-center mb-[90px]" >
        <motion.div className="text-[40px] font-fuente_titulo sm:text-[100px]" animate={{y: 50,}}  transition={{  duration: 0.8 }} >
            Experiència  laboral 
      </motion.div> 
        </div>   
        
            
         
       
      <div className="flex-wrap flex gap-8 justify-around m-auto "> 
        {experienceItems.map((item, i) => (
            <div
              key={item.i}
              className=" text-black min-w-[300px] w-[30%] rounded-[10px]  py-[40px] pr-[30px] pb-[50px] pl-[30px] bg-[#e2e2e2] shadow-lg shadow-[#425192]"
            >
              <h1>{item.titol}</h1>
              <br></br>
              <h2>{item.lloc}</h2>
              <br></br>
              <h3>{item.data}</h3>
              <br></br>
              <div>{item.description}</div>
              <br></br>
              {item.link && (
                <button className="border-[2px] border-black hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
                  <a href={item.link}>{item.lloc}</a>
                </button>
              )}
            </div>
          ))} 
      </div>
          
        
        
      </div>
      
    </>
  );
}
