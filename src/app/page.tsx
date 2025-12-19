import Link from "next/link";

const Home = () => {
  return (
    <div>
      <main>
        Home
        <Link href={"/about"}>Go to about</Link>
      </main>
    </div>
  );
};

export default Home;
