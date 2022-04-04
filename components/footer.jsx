export default function Footer() {
    const socialMedia = [
        {
            nom: "Github",
            icon: "fab fa-github",
            descripcio: "@marticorbalan",
            link: "https://github.com/MartiCorbalan"
          },
          {
             nom: "Linkedin",
             icon: "fab fa-linkedin-in",
             descripcio: "@marticorbalan",
             link: "https://www.linkedin.com/in/martí-corbalan-cruz-15ab301a0/"
          },
          {
             nom: "email",
             icon: "fas fa-envelope",
             descripcio: "martilluc01@gmail.com",
             link: "mailto:martilluc01@gmail.com"
          },
          {
             nom: "instagram",
             icon: "fab fa-instagram",
             descripcio: "@marticorbalan",
             link: "https://www.instagram.com/corba01/"
          }
    ];
  
    return (
      <div className="bg-black text-white hover:bg-white hover:text-black ">
        <div className="flex sm:justify-between">
          {socialMedia.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={
                (item.actual
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white ",
                "px-3 py-2 rounded-md text-sm font-medium")
              }
            >
              {item.nom}
             <i className={item.icon}></i> 
              {item.descripcio}
              {item.link}

            </a>
          ))}
        </div>
      </div>
    );
  }