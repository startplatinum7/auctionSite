"use client";
import { FaUser } from "react-icons/fa";
import Image from "next/image";
import logo from "./../assets/header_1.png";
import customs from "./../assets/customs.png";
import loader from "./../assets/load_anim.gif";
import nafdac from "./../assets/Optimized-NAFDAC-1024x669-1.webp";
import { useEffect, useState } from "react";
import footy from '../assets/download.svg'
import { FaRegFileLines } from "react-icons/fa6";

function Loader() {
  return (
    <div className="grid place-content-center h-screen place-items-center">
      <Image src={loader} alt="loader_gif" />
    </div>
  );
}

export function HomePageActual() {
  return (
    <>
      <div className="grid">
        <div className="flex w-full bg-[#6CB269] md:px-[28px] justify-end min-h-[26px]">
          <div className="flex gap-x-2 items-center">
            <FaUser className="text-white text-[14px]" />
            <span className="text-white text-[14px]">Login</span>
          </div>
        </div>

        <div className="px-[28px] flex justify-between md:h-[82px] items-center relative w-full">
          <div className="flex items-center">
            <Image
              src={logo}
              alt="logo"
              height={35.8}
              className="max-w-[200px]"
            />

            <div className="flex pl-[50px] gap-x-4">
              <a className="text-[#4b6076;] hover:border-b-[#6cb269] hover:border-b-2 h-7 block">
                Agencies
              </a>
              <a className="text-[#4b6076;] hover:border-b-[#6cb269] hover:border-b-2 h-7 block">
                e-Documents
              </a>
              <a className="text-[#4b6076;] hover:border-b-[#6cb269] hover:border-b-2 h-7 block">
                Quick Links
              </a>
              <a className="text-[#4b6076;] hover:border-b-[#6cb269] hover:border-b-2 h-7 block">
                Support
              </a>
              <a className="text-[#4b6076;] hover:border-b-[#6cb269] hover:border-b-2 h-7 block">
                Downloads
              </a>
            </div>
          </div>

          <div className="justify-self-end flex">
            <Image src={customs} alt="customs_service" height={35.8} />
          </div>
        </div>
      </div>

      <div className="body bg-[#4b6076]/20 px-[28px] py-[40px]">
        <div className="grid grid-cols-10">
          <div className="grid md:col-span-7 col-span-10 items-center bg-[#6cb269]/25 rounded-[40px]">
            <div className="flex gap-x-2">
              <div className="pl-[2.25rem] h-[430px] pt-[3rem] grid ">
                <p className="text-xl my-8">NAFDAC</p>

                <p className="text-sm text-[#4b6076] my-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Minus, libero similique. Ipsam, amet! At numquam enim,
                  molestias illo delectus, aliquam error est hic iste ea
                  recusandae laboriosam odio expedita. Cum?
                </p>

                <a className="bg-[#6cb269] w-[30%] text-center text-white p-2 rounded-lg inline-block uppercase">
                  About NAFDAC
                </a>

                <div className="arrows self-end flex gap-x-4 md:p-8">
                  <a className="text-[#6cb269] font-bold">&#x2190;</a>
                  <a className="text-[#6cb269] font-bold">&#x2192;</a>
                </div>
              </div>

              <div className="grid justify-end justify-self-end">
                <Image
                  src={nafdac}
                  alt="functional nafdac img"
                  className="rounded-[40px] photo h-[430px]"
                />
              </div>
            </div>
          </div>

          <div className="md:grid hidden md:col-span-3 p-4">
            <p className="text-2xl">Customs Exchange Rate</p>

            <div>
            <div className="grid-cols-6 grid currency">
              <div className="col-span-1 flag">
                <span className="fi fi-ae"></span>
              </div>
              <div className="col-span-4">AED</div>
              <div className="price">418.25</div>
            </div>

            <div className="grid-cols-6 grid currency">
              <div className="col-span-1 flag">
                <span className="fi fi-eu"></span>
              </div>
              <div className="col-span-4">EUR</div>
              <div className="price">1674.17</div>
            </div>

            <div className="grid-cols-6 grid currency">
              <div className="col-span-1 flag">
                <span className="fi fi-gb"></span>
              </div>
              <div className="col-span-4">GBP</div>
              <div className="price">1900.044</div>
            </div>

            <div className="grid-cols-6 grid currency">
              <div className="col-span-1 flag">
                <span className="fi fi-jp"></span>
              </div>
              <div className="col-span-4">JPY</div>
              <div className="price">9.22</div>
            </div>

            <div className="grid-cols-6 grid currency">
              <div className="col-span-1 flag">
                <span className="fi fi-us"></span>
              </div>
              <div className="col-span-4">USD</div>
              <div className="price">1451.634</div>
            </div>

            <div className="grid-cols-6 grid currency">
              <div className="col-span-1 flag">
                <span className="fi fi-cf"></span>
              </div>
              <div className="col-span-4">XAF</div>
              <div className="price">0.711</div>
            </div>
          </div>

          <div className="grid grid-cols-2 items-end">
          <div className="arrows self-end flex col-span-1 gap-x-4 border-r-1 border-r-gray-500">
                  <a className="text-[#6cb269] text-xl">&#x2190;</a>
                  <a className="text-[#6cb269] text-xl">&#x2192;</a>
                </div>

            <div className="col-span-1 justify-content-end grid">
            <span className="text-right inline-block w-full text-[#6cb269]">See More &#x2197;</span>
            <button className=" w-3/4 bg-[#6cb269] rounded-md text-white p-1">
              HELP DESK
            </button>
          </div>     
          </div>

         
          </div>

        </div>
      
        <div className="grid grid-cols-2 my-4 gap-x-6" >
          <div className="col-span-1 bg-white p-6 my-2 rounded-2xl">
            <p className="p-2 text-2xl">E-Documents</p>
            <div className="grid grid-cols-2">
            <div className="flex items-center">
            <FaRegFileLines className="inline text-[80px]"/>
            <div>
              <p>CBN FormM</p>
              <p>Fill CBN Form</p>
            </div>
            </div>

            <div className="flex items-center">
            <FaRegFileLines className="inline text-[80px]"/>
            <div>
              <p>NAFDAC eLicense</p>
              <p>Fill NAFDAC</p>
            </div>
            </div>

            </div>

          </div>

          <div className="col-span-1 bg-white p-6 my-2 rounded-2xl">
            <p className="p-2 text-2xl">Tools</p>
            <div className="grid grid-cols-2 ">
            <div className="flex items-center">
            <FaRegFileLines className="inline text-[80px]"/>
            <div>
              <p>Trader's Guide</p>
              <p>Fill CBN Form</p>
            </div>
            </div>

            <div className="flex items-center">
            <FaRegFileLines className="inline text-[80px]"/>
            <div>
              <p>NAFDAC eLicense</p>
              <p>Fill NAFDAC</p>
            </div>
            </div>

            </div>

          </div>

          </div>


<footer className="bg-white text-[#4b6076] grid grid-cols-6 items-center self-end">
  <div className="col-span-5 ">
  <a className="p-2 ">Home</a>
  <a className="p-2">Contact System Administrator</a>
  <a className="p-2">Frequently Asked Questions</a>
    </div>

<div className="col-span-1 grid justify-self-end justify-end">
  <Image src={footy} className="h-8" alt="Footer SVG"/>
</div>
  
</footer>

      </div>
    </>
  );
}

export default function HomePage() {
  const [loading, loadState] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => loadState(false), 800);
  }, []);

  return <>{loading ? <Loader /> : <HomePageActual />}</>;
}
