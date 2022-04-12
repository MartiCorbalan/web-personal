
import Footer from "../../components/footer";
import Header from "/components/header";
import { motion } from "framer-motion";
import ExperienciaLaboral from "../ExperienciaLaboral";

const variants = {
  
}

export default function Main() {
 

  return (
    <>
      <Header />
     <section className="   bg-[#6F6892]  min-h-[300px] ">
      
        <div className=" text-center  ">
         
          <motion.div className="text-[40px] font-fuente_titulo sm:text-[100px]" animate={{y: 50,}}  transition={{  duration: 0.8 }} >
            Martí Corbalan Cruz 
          </motion.div> 
         
          <div className="   cursor-default p-[50px] ">
              <p className="w-[400px]">
              Estic fent els primers passos com a desenvolupador frontend modern
              Un cop he agafat un notable domini en HTML i CSS, ara estic centrat en el desenvolupament 
              d'aplicacions React utilitzant llibreries com Redux, Material UI, React Router
              </p>
          </div>
         
      </div>
     

     </section>
     
     <section className="bg-[#4B4B69] min-h-[300px] ">
      <div className=" text-center pt-[10px]" >
        <motion.div className="text-[40px] font-fuente_titulo sm:text-[100px]" animate={{y: 50,}}  transition={{  duration: 0.8 }} >
            About me 
      </motion.div> 
        </div>   

    <div className="flex-wrap flex gap-8 justify-around  m-auto p-[50px]">
      
      <div className="box2 min-w-[300px] rounded-[10px] w-[30%] ">
        <h2>Disseny Web:</h2> 
        <p>M'agrada dissenyar pàgines web, sobretot en llenguatges HTML, CSS i JavaScript. Encara estic aprenent a dissenyar profesional-ment</p> 
      </div>
       

      <div className="box2  min-w-[300px] rounded-[10px] w-[30%] ">
        <h2>VideoJocs:</h2> 
        <p>M'agraden els videojocs online, els shooters,  els jocs com Little Nightmares o It Takes Two.</p> 
      </div>
    

      <div className="box2  min-w-[300px]  rounded-[10px] w-[30%] ">
      <h2>Música:</h2> 
        <p>M'agrada quasi qualsevol tipus de música, però sobretot el rap i el trap.</p> 
       
      </div>
 
    </div>
		
    
     </section>

     <section className=" bg-[#2E3145] min-h-[300px]">
        <ExperienciaLaboral/>
     </section>
     
     
     
    </>
  );
}
