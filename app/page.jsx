"use client"
import { TypeAnimation } from 'react-type-animation';
import Social from './components/Social';
import Photo from './components/Photo';
import Speech from './components/Speech';
import About from './about/page';
import Skills from './skills/page';
import Contact from './contact/page';



export default function Home() {


  return (
    <>
        <div id="home" className="container  mx-auto h-full pt-5 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 lg:pt-8 lg:pb-24">
            {/* Text */}
            <div className="text-center md:text-left space-y-3 order-2 md:order-none md:mb-0">
              <p className="text-blue-400 animate-border-gradient px-3 py-1 inline-block mb-3 rounded-md">
                Welcome to My Domain
              </p>
              <h2 className="h2 mt-4">
                Hello! I'm <br /> <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-accent group-hover:to-primary transition-all duration-500'>Abdullah All Kafi</span>
              </h2>

              {/* Type Animation Here */}
              <div className="text-xl font-semibold bg-gradient-to-r from-pink-500 to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:to-primary transition-all duration-500">
                <TypeAnimation
                  sequence={[
                    ' Front-End Developer', 1500,
                    ' React Developer', 1500,
                    'MERN Stack Enthusiast', 1500,
                  ]}
                  speed={60}
                  deletionSpeed={50}
                  repeat={Infinity}
                  cursor
                />
              </div>

              <p className="max-w-[400px] lg:max-w-[440px]">
               Passionate developer focused on building responsive, user-friendly web applications. Let's connect and create something amazing!
              </p>

              <div>
                <Social />
              </div>
            </div>

            {/* Photo */}
            <div className="order-1 md:order-none md:mb-0 ">
              <Photo />
              <Speech />
            </div>
          </div>
        </div>
        <About></About>
        <Skills/>
        <Contact/>

    </>
  );
}
