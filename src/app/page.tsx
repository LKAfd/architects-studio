import Image from "next/image";
import heroImage from "../../public/assets/hero.jpg";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Unlock&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="h-screen flex justify-center items-center py-96 px-10">
        <div className="w-[39.20rem] h-[28.2rem] flex-1 py-7">
          <h1 className="font-montserrat text-6xl font-extrabold text-gray-800 text-center mb-16">
            Welcome To The
            <br />
            Architects Studio
          </h1>
          <p className="font-newsreader text-4xl font-bold py-3 px-16">
            HIGH QUALITY AMAZING
            <br />
            DESIGN AVAILABLE HERE
          </p>

          <div className="flex max-lg:ml-auto space-x-4 py-16 px-16">
            <button className="px-4 py-2 font-newsreader text-3xl rounded-full font-bold text-white border-2 border-[#007bff] bg-[#420d7a] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]">
              Explore
            </button>
          </div>
        </div>

        <div className="w-[39.20rem] h-[28.2rem]">
          <Image
            className="rounded-[15px] w-[50rem] h-[35rem]"
            src={heroImage}
            alt="architect"
            height={658}
            width={694}
          />
        </div>
      </main>
    </>
  );
}
