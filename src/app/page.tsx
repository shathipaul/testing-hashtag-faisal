import Link from "next/link";

const Home = async () => {
  await new Promise((r) => setTimeout(r, 5500));
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
