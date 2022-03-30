import Link from "next/link";
export default function Main() {
  return (
    <>
      <h1>bloc de notes</h1>
      <Link href="/">
        <a>go home</a>
      </Link>
      <style jsx>{`
        h1 {
          font-size: 24px;
          color: red;
        }
      `}</style>
    </>
  );
}
