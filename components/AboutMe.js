export default function AboutMe() {
  const experienceItems = [
    {
      titol: "Desenvolupador Web (pràctiques)",
      lloc: "Extreme Micro (Mataró)",
      data: "Març 2021 - Juny 2021",
      description: (
        <ul  className="text-lg">
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
        <ul  className="text-lg">
          <li>- Suport tant en Hardware com en Software</li>
          <li>
            - Instal·lació, manteniment i reparació d'ordinadors i impresores.{" "}
          </li>
        </ul>
      ),
    },
    {
      titol: "Desenvolupador Web",
      lloc: "La Volta Mataró",
      description: (
        <ul  className="text-lg">
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
        <ul  className="text-lg">
          <li>- Actualització completa de la pàgina web</li>
        </ul>
      ),
      link: "https://tecnotradegroup.com/",
    },
    {
      titol: "Desenvolupador Web ",
      lloc: "Dea Essence",
      description: (
        <ul  className="text-lg">
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

  return (
    <>
      <div className="border-[8px] pt-[10px] pr-[10px] pl-[10px] pb-[10px] flex-wrap flex gap-8 justify-around max-w-[1200px] m-auto">
        {experienceItems.map((item, i) => (
          <div
            key={item.i}
            className=" border-[2px] text-white min-w-[300px] 2xl:h-auto rounded-[10px] w-[30%] py-[40px] pr-[30px] pb-[50px] pl-[30px]"
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
              <button className="border-[2px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <a href={item.link}>{item.lloc}</a>
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
