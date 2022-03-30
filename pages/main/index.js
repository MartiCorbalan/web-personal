import Link from "next/link";
import Header from "/components/header";
import styles from "/styles/Home.module.css";
export default function Main() {
  return (

    <>
    <Header />
    <div className=" w-full h-screen bg-gray-400">
      <Link href="/">
        <a>go home</a>
      </Link>
    </div>
      
      
      
    </>
  );
}
