import Footer from "../components/footer";
import { projects } from "../components/projectes";
import Header from "/components/header";
export default function Portafoli() {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen bg-black ">
        <br></br>
        <div className=" max-w-5xl m-auto px-4 border-[8px] ">
          <div className="text-white  text-center ">
            <h1 className="text-4xl">Portafoli</h1>
          </div>
        </div>
        <br></br>
        <div className="border-[8px] pt-[10px] pr-[10px] pl-[10px] pb-[10px] flex-wrap flex gap-8 justify-around max-w-[1200px] m-auto">
          {projects.map((item, i) => (
            <div
              key={item.i}
              className=" border-[2px] text-white min-w-[300px] 2xl:h-auto rounded-[10px] w-[30%] py-[40px] pr-[30px] pb-[50px] pl-[30px]"
            >
              <img
                src={item.img}
                className="h-[250px] rounded-[10px] w-[450px]"
              />

              <h1>{item.titol}</h1>
              <br></br>
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
        <br></br>
        <Footer />
      </div>
    </>
  );
}
