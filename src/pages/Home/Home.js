import React from "react";
import topBanner from "../../images/three.png";
import bg from "../../images/zettabg.jpg";
import logo from "../../images/logo.png";
import single from "../../images/single.png";
import man from "../../images/man.png";
import hand from "../../images/hand.jpg";
import multi from "../../images/multi.png";

const Home = () => {
  return (
    <div className="text-gray-300 from-cyan-900 font-sans">
      <div className=" ">
        <nav
          aria-controls="navbar-sticky fixed-top"
          class="bg-white    px-2 sm:px-4 py-2.5   dark:bg-gray-900"
        >
          <div class="container flex flex-wrap items-center justify-between mx-auto">
            <a href="#" class="flex items-center">
              <img src={logo} class="h-6 mr-3 sm:h-9" alt=" zetta Logo" />
              <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                ZETTA
              </span>
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Buy Zetta Watch
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div
        style={{
          backgroundImage: ` url("${bg}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: " cover",

          padding: "20px",
        }}
      >
        <div className="lg:flex justify-around align-center items-center gap-10 mb-4">
          <div className="  text-justify    p-6  ">
            <h1 className="text-gray-400 font-bold text-3xl   mt-3">
              The Watch Every <br /> Man Desires
            </h1>
            <p className="mt-3">
              Lorem ipsum, dolor consectetur adipisicing elit. Dignissimos{" "}
              <br /> recusandae eius! Hic nihil ex maxime unde aut, illo minima!
            </p>
            <ul className="list-disc ml-4 mt-3">
              <li>I am respected and admired </li>
              <li> I care how i look, and i look good </li>
              <li> I am strogn and confident</li>{" "}
            </ul>
          </div>

          <div className=" align-center">
            <img className="h-64 mx-auto" src={topBanner} alt="" />
          </div>
        </div>

        <h1 className="text-lg">Whay Would You Want This Watch?</h1>
        <div className="lg:flex  mt-4 justify-around  gap-8 align-center items-center  p-4">
          <div className="  ">
            <div
              style={{
                backgroundColor: "rgb(42, 45, 42)",
                borderRadius: "50%",
                opacity: 0.9,
                backgroundBlendMode: "rgb(173, 164, 164)",
              }}
            >
              <img className="mx-auto m-2 lg:mb-0 mb-5" src={single} alt="" />
            </div>
          </div>
          <div className="lg:flex gap-4 justify-items-end align-center   items-center">
            <div className="lg:flex text-justify justify-between gap-4 lg:flex-col align-center lg:w-72 ">
              <div
                style={{
                  backgroundColor: "rgb(42, 45, 42)",
                  borderRadius: "10px",
                  opacity: 0.9,
                  backgroundBlendMode: "rgb(173, 164, 164)",
                  padding: "10px",
                  marginBottom: "10px",
                }}
                className=""
              >
                <img src="" alt="" />
                <p className="text-lg text-center font-bold">Logo</p>
                <br />

                <p className="text-sm text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                  corporis! Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Est, corporis!
                </p>
              </div>
              <div
                style={{
                  backgroundColor: "rgb(42, 45, 42)",
                  borderRadius: "10px",
                  opacity: 0.9,
                  backgroundBlendMode: "rgb(173, 164, 164)",
                  padding: "10px",
                  marginBottom: "10px",
                }}
                className=""
              >
                <img src="" alt="" />
                <p className="text-lg text-center font-bold">Logo</p>
                <br />

                <p className="text-sm text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                  corporis! Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Est, corporis!
                </p>
              </div>
            </div>
            <div className="lg:flex text-justify justify-center gap-4 lg:flex-col lg:w-72">
              <div
                style={{
                  backgroundColor: "rgb(42, 45, 42)",
                  borderRadius: "10px",
                  opacity: 0.9,
                  backgroundBlendMode: "rgb(173, 164, 164)",
                  padding: "10px",
                  marginBottom: "10px",
                }}
                className=""
              >
                <img src="" alt="" />
                <p className="text-lg text-center font-bold">Logo</p>
                <br />

                <p className="text-sm text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                  corporis! Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Est, corporis!
                </p>
              </div>
              <div
                style={{
                  backgroundColor: "rgb(42, 45, 42)",
                  borderRadius: "10px",
                  opacity: 0.9,
                  backgroundBlendMode: "rgb(173, 164, 164)",
                  padding: "10px",
                  marginBottom: "10px",
                }}
                className=""
              >
                <img src="" alt="" />
                <p className="text-lg text-center font-bold">Logo</p>
                <br />

                <p className="text-sm text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                  corporis! Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Est, corporis!
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------------------ */}
        <div className="lg:flex justify-around align-center items-center gap-3 m-5">
          <div className="">
            <p className="text-2xl font-bold   text-gray-400   mb-5 ">
              Being Confident And Decisive
            </p>
            <p className="text-justify mb-5 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium <br /> ratione repellendus accusamus? Officiis aut
              magni non nam modi quos aliquid!
            </p>
            <p className="text-justify mb-5 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium <br /> ratione repellendus accusamus? Officiis aut
              magni non nam modi quos aliquid!
            </p>
            <button className="btn flex   border px-4 py-2 ">
              Zetta Watch
            </button>
          </div>
          <div className="  mt-5">
            <img className="mx-auto w-80" src={man} alt="" />
          </div>
        </div>
        <div className="lg:flex justify-around align-center items-center gap-3 m-5">
          <div className="  mt-5 rounded-lg">
            <img className="mx-auto w-80 rounded-2xl" src={hand} alt="" />
          </div>
          <div className="">
            <p className="text-2xl font-bold   text-gray-400   mt-5 mb-5 ">
              Lorem ipsum dolor sit amet.
            </p>
            <p className="text-justify mb-5 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium <br /> ratione repellendus accusamus? Officiis aut
              magni non nam modi quos aliquid!
            </p>
            <p className="text-justify mb-5 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium <br /> ratione repellendus accusamus? Officiis aut
              magni non nam modi quos aliquid!
            </p>
            <button className="btn flex   border px-4 py-2 ">
              Zetta Watch
            </button>
          </div>
        </div>
        <div className="p-6">
          <h1 className="text-2xl font-bold font-sans text-center text-gray-400 mt-5">
            Features Of Zetta Watch
          </h1>
          <div className=" lg:flex justify-evenly gap-2 mt-5">
            <div
              style={{
                backgroundColor: "rgb(42, 45, 42)",
                borderRadius: "10px",
                opacity: 0.9,
                backgroundBlendMode: "rgb(173, 164, 164)",
                padding: "15px",
                width: "300px",
                marginBottom: "10px",
              }}
              className=""
            >
              <h1>Lorem, ipsum dolor.</h1>
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                vero?
              </h1>
            </div>
            <div
              style={{
                backgroundColor: "rgb(42, 45, 42)",
                borderRadius: "10px",
                opacity: 0.9,
                backgroundBlendMode: "rgb(173, 164, 164)",
                padding: "15px",
                width: "300px",
                marginBottom: "10px",
              }}
              className=""
            >
              <h1>Lorem, ipsum dolor.</h1>
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                vero?
              </h1>
            </div>
            <div
              style={{
                backgroundColor: "rgb(42, 45, 42)",
                borderRadius: "10px",
                opacity: 0.9,
                backgroundBlendMode: "rgb(173, 164, 164)",
                padding: "15px",
                width: "300px",
                marginBottom: "10px",
              }}
              className=""
            >
              <h1>Lorem, ipsum dolor.</h1>
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                vero?
              </h1>
            </div>
            <div
              style={{
                backgroundColor: "rgb(42, 45, 42)",
                borderRadius: "10px",
                opacity: 0.9,
                backgroundBlendMode: "rgb(173, 164, 164)",
                padding: "15px",
                width: "300px",
                marginBottom: "10px",
              }}
              className=""
            >
              <h1>Lorem, ipsum dolor.</h1>
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                vero?
              </h1>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h1 className="text-2xl font-bold text-gray-400 ">
            Everybody Loves Zetta !
          </h1>
          <img className="mx-auto lg:w-[800px] mt-3" src={multi} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
