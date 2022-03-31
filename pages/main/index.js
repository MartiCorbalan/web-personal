import AboutMe from "../../components/AboutMe";
import Header from "/components/header";

export default function Main() {

  const idiomes = [
    {
      titol: "Català - Natiu",
    },
    {
      titol:"Castellà - Natiu"
    },
    {
      titol:"Anglès"
    }
  ]


  return (
    <>
      <Header />
      <div className=" w-full min-h-screen bg-black ">
        <br></br>
        <div className=" max-w-5xl m-auto px-4 border-[8px] ">
          <div className="text-white  text-center ">
            <h1 className="text-4xl">Martí Corbalan Cruz</h1>
            <p className="text-xl">Frontend Developer</p>
          </div>
          
        </div>
        <br></br>
        <section className=" max-w-[1200px] px-4 2xl:h-auto m-auto border-[8px] min-w-[100px]">
          <div className=" pt-[10px] pr-[10px] pl-[10px] pb-[10px] flex-wrap flex gap-8 justify-around max-w-[1200px] m-auto ">
            <div className=" text-white min-w-[300px] 2xl:h-auto  w-[30%] py-[40px] pr-[30px] pb-[50px] pl-[30px]">
              <h1>
                Em dic Martí Corbalan i actualment tinc 20 anys.
                <br></br>
                <br></br>
              </h1>
              <h1 className="xl:text-2xl">He estudiat:</h1>
              <ul>
                <li>- Cicle mitjà de Xarxes microinformàtiques</li>
                <li>
                  - Grau superior de desenvolupament &nbsp;&nbsp;d'aplicacions
                  multiplataforma
                </li>
              </ul>
              <br></br>
              Estic fent els primers passos com a desenvolupador frontend modern
              <br></br>
              Un cop he agafat un notable domini en HTML i CSS, ara estic
              centrat en el desenvolupament d'aplicacions React i utilitzant
              llibreries com Redux, Material UI, React Router
            </div>
            {/* ********************** */}
            <div className="  text-white min-w-[300px] 2xl:h-auto  w-[30%] py-[40px] pr-[30px] pb-[50px] pl-[30px]">
              <h1 className="">Idiomes:</h1>
              <br></br>
              {idiomes.map((item, i) => (
            <div
            key={item.i}
            className="text-white text-left  w-3/4 pt-[10px] pb-[10px]"              >
            <h2>{item.titol}</h2>
            
            
          </div>
        ))}
              
            </div>
            {/* *********** */}
            <div className="  text-white min-w-[300px] 2xl:h-auto  w-[30%] py-[40px] pr-[30px] pb-[50px] pl-[30px]">
              <h1 >Què m'agrada?</h1>
              <br></br>
              <h2 >Disseny Web:</h2>
              <p>
                M'agrada dissenyar pàgines web, sobretot en llenguatges HTML,
                CSS i JavaScript. Encara estic aprenent a dissenyar
                profesional-ment
              </p>
              <br></br>
              <h2 >VideoJocs:</h2>
              <p>
                M'agraden els videojocs online, els shooters, el League of
                Legends i els jocs com Little Nightmares o It Takes Two.
              </p>
              <br></br>
              <h2 >Música:</h2>
              <p>
                M'agrada quasi qualsevol tipus de música, però sobretot el rap i
                el trap.
              </p>
            </div>
          </div>
        </section>
        <br></br>
        <section>
        <div className=" max-w-5xl m-auto px-4 border-[8px] ">
          <div className="text-white  text-center ">
            <h1 className="text-4xl">Experiència laboral</h1>
            <p className="text-xl">Frontend Developer</p>
          </div>
          
        </div>
        <br></br>
          <AboutMe />
        </section>
      </div>
    </>
  );
}
