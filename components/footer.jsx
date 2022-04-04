import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
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
      <div className="bg-white text-black hover:bg-black hover:text-white flex glex-wrap  justify-around  min-w-[30px]  ">
        <div className=" flex-wrap gap-2 justify-around ">
          <div className="ml-11">
            <h3 className="ml-11">Xarxes Socials</h3>
          </div>
          <div className="flex">
            {socialMedia.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className={
                  (item
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white ",
                  "px-3 py-2 rounded-md text-sm font-medium")
                }
              >
                <div className="flex sm:justify-between ">
                  <ul>
                    <div href={item.link}>
                      {item.nom}
                      <div>
                        <FontAwesomeIcon icon={item.icon} />
                      </div>
                    </div>
                  </ul>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="min-w-[100px] ">
          <h3>Contacte</h3>
          <a href="mailto:martilluc01@gmail.com">martilluc01@gmail.com</a>
        </div>
      </div>
    </>
  );
}
