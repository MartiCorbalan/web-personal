
import { projects } from "../components/projectes";

import { useState } from "react";
import { motion } from "framer-motion";
export default function Portafoli() {
  
const [actual, setActual] = useState(0);

const next = () => {
 
  if (actual >= projects.length - 1) {
    setActual(0);
  } else {
    setActual((n) => n + 1);
  }
};

const last = () => {
  if (actual <= 0) {
    setActual(projects.length - 1);
  } else {
    setActual(actual - 1);
  }
};

const act = (m) => {
  setActual(m);
};
  return (
    <>
     
      <div className="  bg-[#2E5266] p-[50px]">
       
        <div className=" text-center " >
        <motion.div className="text-[40px] font-fuente_titulo sm:text-[100px]" animate={{y: 20,}}  transition={{  duration: 0.8 }} >
            Portafoli 
      </motion.div> 
        </div>  
        

      <div className="flex-wrap flex gap-8 justify-around p-[50px] shadow-[50px] shadow-[#425192]">

            <img  src="/arrow-right.png"  className="imatge w-[30px] h-[30px] mt-[90px] cursor-pointer" onClick={() => next()} />
          
            <div className="w-[250px] min-w-[200px] justify-around">
                    <img
                        src={projects[actual === 0 ? projects.length - 1 : actual - 1].img}
                        className="h-[200px] rounded-[10px] w-[300px]"
                    />
                    <p className=" text-white font-bold">
                    {projects[actual === 0 ? projects.length - 1 : actual - 1].contignut}
                    </p>

                    <div className="flex justify-around">
                        <button className="border-[2px] hover:bg-blue-700 text-white font-bold py-2 px-4 mt-[6px]  rounded ">
                                <a href={projects[actual === 0 ? projects.length - 1 : actual - 1].code}>Project</a>
                        </button>
                        <button className="border-[2px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m">
                                <a href={projects[actual === 0 ? projects.length - 1 : actual - 1].link}>Code</a>
                        </button>
                    </div>
            </div>

            <div className="w-[250px] min-w-[200px] justify-around">
                  
                    <img
                        src={projects[actual].img}
                        className="h-[200px] rounded-[10px] w-[300px]"
                    /> 
                    <p className="text-white font-bold">
                      {projects[actual].contignut}
                    </p>
                    <div className="flex justify-around">
                          <button className="border-[2px] hover:bg-blue-700 text-white font-bold py-2 px-4 mt-[6px]  rounded ">
                                <a href={projects[actual].code}>Project</a>
                          </button>
                    
                          <button className="border-[2px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m">
                                <a href={projects[actual].link}>Code</a>
                          </button>
                    </div>
                    
            </div>
                    

            <div className="w-[250px] min-w-[200px]">
                      <img

                      src={projects[actual >= projects.length -1 ? 0 : actual + 1].img}
                      className="h-[200px] rounded-[10px] w-[300px]"
                    /> 
                     <p className="text-white font-bold">
                    {projects[actual >= projects.length - 1 ? 0 : actual + 1].contignut}
                    </p>
                    <div className="flex justify-around">
                       <button className="border-[2px] hover:bg-blue-700 text-white font-bold py-2 px-4 mt-[6px]  rounded">
                              <a href={projects[actual >= projects.length - 1 ? 0 : actual + 1].code}>Project</a>
                    </button>
                   
                    <button className="border-[2px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                  <a href={projects[actual >= projects.length - 1 ? 0 : actual + 1].link}>Code</a>
                </button>
                    </div>
                   
            </div>
                  <img  src="/arrow-right.png"  className="w-[30px] h-[30px] mt-[90px] cursor-pointer" onClick={() => next()}/> 

          </div>
            
            {/* <button className="text-white "   onClick={() => last()} >
            
            </button> */}

     

        </div>
       
     
    </>
  );
}
