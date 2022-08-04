import "../styles/hero.scss";
import AnimatedLetters from "../components/animatedLetters/AnimatedLetters";
// import woman image
import img from "../assets/img/letter-gad70a2467_640.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArr = ["Y", "o", "u", "s", "s", "e", "f"];
  const jobArr = [
    "F",
    "r",
    "o",
    "n",
    "t",
    "e",
    "n",
    "d",
    " ",
    "R",
    "e",
    "a",
    "c",
    "t",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r"
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 5000);
    return () => {};
  }, []);

  return (
    <section
      id="home"
      className="hero   bg-primary  p-8 py-32 
       overflow-hidden"
    >
      <div className="text-zone">
        <h1 className="whitespace-nowrap ">
          <AnimatedLetters
            strArray={["H", "i,"]}
            idx={10}
            letterClass={letterClass}
          />{" "}
          <br />
          <h1 className="flex z-10 relative">
            <p className="relative z-10">
              <AnimatedLetters
                strArray={["M", "y", " ", "N", "a", "m", "e", " ", "I", "s"]}
                idx={12}
                letterClass={letterClass}
              />
            </p>

            <p className="pl-2 relative">
              <AnimatedLetters
                strArray={nameArr}
                idx={22}
                letterClass={letterClass}
              />
              {/* <span className="img absolute ">
                <img src={img} />
              </span> */}
            </p>
          </h1>
          <br />
          <h1 className="front">
            {" "}
            <AnimatedLetters
              strArray={jobArr}
              idx={28}
              letterClass={letterClass}
            />
          </h1>
        </h1>
        <button
          className="bg-transparent border border-gray-400 text-white p-3 rounded-sm  
        hover:bg-accent hover:border-accent
         cursor-pointer mt-4"
        >
          Download resume
        </button>
      </div>

      {/* <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-lg text-accent text-md mb-[22px]">
              Hey, I'm Jane! 👋
            </p>
            <h1
              className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] 
            font-bold md:tracking-[-2px]"
            >
              I Build & Design <br /> Web Interfaces.
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing illo ad labore
              dolor elit.
            </p>
            <button className="btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all">
              Work with me
            </button>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
