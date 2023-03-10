import About from '@/components/About';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Head from 'next/head';
import type {NextPage} from "next";


const Home: NextPage = () => {
  return (
    
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Portifolio Fdev</title>
      </Head>
    
        <Header />


    {/* Hero */}
    <section id="hero" className="snap-start">
      <Hero />
    </section>

    <section id="about" className="snap-center ">
      <About />
    </section>
    {/* About */}

    {/* Experience */}

    {/* Skills */}

    {/* Projects */}

    {/* Contact Me */}

    </div>
  );
};

export default Home;