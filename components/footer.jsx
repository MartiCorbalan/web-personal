import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faEvelope,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  const socialMedia = [
    {
      nom: "Github",
      icon: faGithub,
      descripcio: "@marticorbalan",
      link: "https://github.com/MartiCorbalan",
    },
    {
      nom: "Linkedin",
      icon: faLinkedin,
      descripcio: "@marticorbalan",
      link: "https://www.linkedin.com/in/martí-corbalan-cruz-15ab301a0/",
    },
    /* {
      nom: "email",
      icon: faEvelope,
      descripcio: "martilluc01@gmail.com",
      link: "mailto:martilluc01@gmail.com",
    }, */
    {
      nom: "instagram",
      icon: faInstagram,
      descripcio: "@marticorbalan",
      link: "https://www.instagram.com/corba01/",
    },
  ];

  return (
    <>
      <div className="bg-[#EEEEEE] flex-wrap flex gap-8 justify-around  ">
        <div className=" flex-wrap gap-2 justify-around ">
          
          <motion.div className="text-[50px] text-center" animate={{x: 30,}}  transition={{  duration: 0.8 }}>
            Xarxes Socials
          </motion.div>
         
          <div className="flex-wrap flex gap-8 justify-around p-[50px]  ">
          {socialMedia.map((item) => (
              <a
                key={item.name}
                href={item.link}
                
              >
                <div className="text-center  social-media-box bg-[#999] shadow-lg shadow-[#425192]">
                  <ul>
                    <div className="icons ">
                        <FontAwesomeIcon icon={item.icon} />
                    </div>
                    <div href={item.link}>
                      {item.nom}
                      
                    </div>
                  </ul>
                </div>
              </a>
            ))}
          </div>
        </div>
       
      </div>
    </>
  );
}
