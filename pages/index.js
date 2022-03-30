import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Link from "next/link";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>App Corba</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    

      <main className={styles.main}>
        <section className="section-main ">
          <div className="box p-32 border-white border-solid 
          border-t-[12px] border-l-[12px] border-r-[12px] border-b-[12px]
          animate-wiggle"
          >
            <div className="m-0 leading-tight text-7xl text-white ">
              <h1>CORBA WEB</h1>
            </div>
            <nav className="text-2x1 text-center text-white">
              <br></br>
              <Link href="/main">
                <a className="text-gray-300">Entrar</a>
              </Link>
            </nav>
          </div>
        </section>
      </main>

      <style jsx>
        {`
          .box { 
            animation: mymove 4s infinite;
          }
          @keyframes mymove {
            50% {
              box-shadow: 10px 20px 30px red;
            }
          }
        `}
      </style>
    </div>
  );
}
