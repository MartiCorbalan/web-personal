import Footer from "../components/footer";
import { projects } from "../components/projectes";
import Header from "/components/header";
import { useState } from "react";
import { motion } from "framer-motion";
export default function Portafoli() {
  
const [actual, setActual] = useState(0);

const next = () => {
  console.log("arriba");
  console.log(imatges.length);
  if (actual >= imatges.length - 1) {
    setActual(0);
  } else {
    setActual((n) => n + 1);
  }
};

const last = () => {
  if (actual <= 0) {
    setActual(imatges.length - 1);
  } else {
    setActual(actual - 1);
  }
};

const act = (m) => {
  setActual(m);
};
  return (
    <>
     
      <div className="  bg-[#141E61] p-[50px]">
        <br></br>
        <div className=" text-center " >
        <motion.div className="text-[40px] font-fuente_titulo sm:text-[100px]" animate={{y: 20,}}  transition={{  duration: 0.8 }} >
            Portafli 
      </motion.div> 
        </div>  
        <br></br>
       

        <div className=" flex-wrap flex gap-8 justify-around  m-auto">

{/* <div>
  {projects[actual]}
</div> */}
     

          {projects.map((item, i) => (
            <div
              key={item.i}
              className=" border-[2px] text-white min-w-[300px] 2xl:h-auto rounded-[10px] w-[30%] py-[40px] pr-[30px] pb-[50px] pl-[30px]"
            >
              <img
                src={item.img}
                className="h-[250px] rounded-[10px] w-[450px]"
              />
              <h2>{item.descripcio}</h2>
              <br></br>
              <p>{item.contignut}</p>
              <br></br>

              <div className="flex justify-around">
                <button className="border-[2px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <a href={item.code}>Projecte</a>
                </button>
                <button className="border-[2px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <a href={item.link}>Codi</a>
                </button>
              </div>
            </div>
          ))}
        
        </div>
       
      </div>
    </>
  );
}
