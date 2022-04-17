
import Footer from "../../components/footer";
import Header from "/components/header";
import { motion } from "framer-motion";
import ExperienciaLaboral from "../ExperienciaLaboral";
import Portafoli from "../Portafoli";

export default function Main() {
 

  return (
    <>
      <Header />
      <section className="bg-[#2E5266] text-[#E2C044] bold">      
        <div className=" text-center  ">
         
          <motion.div className="text-[40px] font-fuente_titulo sm:text-[100px] mb-[20px]" animate={{y: 50,}}  transition={{  duration: 0.8 }} >
            Martí Corbalan Cruz 
          </motion.div> 
        
            <div className=" cursor-default p-[40px] text-[50px] ">
              <p className="">
              Estic fent els primers passos com a desenvolupador frontend modern <br></br>
              Un cop he agafat un notable domini en HTML i CSS, ara estic centrat en el desenvolupament <br></br>
              d'aplicacions React utilitzant llibreries com Redux, Material UI, React Router
              </p>
          </div>
         
         
      </div>

    </section>     
     <section className="bg-[#2E5266] min-h-[300px] text-[#75C9C8]  p-[20px]  ">
       <div className="border-t-[2px] border-b-[2px] border-black w-[70%] m-auto">
          <div className=" text-center pt-[10px]" >
        <motion.div className="text-[40px] font-fuente_titulo sm:text-[100px]" animate={{y: 50,}}  transition={{  duration: 0.8 }} >
            About me 
      </motion.div> 
        </div>   

    <div className="flex-wrap flex gap-8 justify-around m-auto p-[50px]">
      
      <div className="box2 text-[#007991] bg-[#999] shadow-lg shadow-[#425192] min-w-[300px]   ">
        <h2>Disseny Web</h2> 
      </div>

      <div className="box2 text-[#007991]  bg-[#999] shadow-lg shadow-[#425192] min-w-[300px]   ">
        <h2>Esport</h2> 
      
      </div>

      <div className="box2 text-[#007991] bg-[#999] shadow-lg shadow-[#425192] min-w-[300px]   ">
        <h2>Animals</h2> 
      
      </div>
      <div className="box2 bg-[#999] text-[#007991] shadow-lg shadow-[#425192] min-w-[300px]   ">
        <h2>Viajar</h2> 
        
      </div>

      <div className="box2 text-[#007991] bg-[#999] shadow-lg shadow-[#425192]  min-w-[300px]   ">
        <h2>VideoJocs</h2> 
      </div>
    

      <div className="box2 text-[#007991] bg-[#999] shadow-lg shadow-[#425192]  min-w-[300px]   ">
      <h2>Música</h2> 
      </div>
 
    </div>
       </div>
     
		
    
     </section>

     <section className=" bg-[#2E5266] min-h-[300px]">
       <div className="border-b-[2px] border-black w-[70%] m-auto">
         <ExperienciaLaboral/>
       </div>
        
     </section>

     <section>
       <Portafoli/>
     </section>
     
     <section>
       <Footer/>
     </section>
     
    </>
  );
}
