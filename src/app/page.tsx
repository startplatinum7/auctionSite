"use client";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logo from "./../assets/header_1.png";
import customs from "./../assets/customs.png";
import loader from "./../assets/load_anim.gif";
import megaphone from "../assets/megaphone.png";
import nafdac from "./../assets/Optimized-NAFDAC-1024x669-1.webp";
import { useEffect, useState } from "react";
import footy from "../assets/download.svg";
import { FaBookOpenReader, FaRegFileLines } from "react-icons/fa6";
import { useRouter } from "next/navigation";

function Loader() {
  return (
    <div className="grid place-content-center h-screen place-items-center">
      <Image src={loader} alt="loader_gif" />
    </div>
  );
}

export function HomePageActual() {
  const [isBanner, showBanner] = useState(true);
  const [activeHover, changeActive] = useState("");

  return (
    <>
      <div className="grid">
        <div className="flex w-full bg-[#6CB269] md:px-[28px] justify-end min-h-[26px]">
          <div className="flex gap-x-2 items-center">
            <FaUser className="text-white text-[14px]" />
            <span className="text-white text-[14px]">Login</span>
          </div>
        </div>

        <div className="px-[28px] flex justify-between header md:h-[82px] items-center relative w-full">
          <div
            className={`grid-cols-10 hover-nav-agencies absolute left-0 z-20 w-full bg-white p-8 ${activeHover == "agencies" ? "grid" : "hidden"}`}
            style={{
              bottom: "-11.5rem",
            }}
          >
            <div>
              <a className="block text-[#4b6076]">NCS</a>
              <a className="block text-[#4b6076]">NAFDAC</a>
              <a className="block text-[#4b6076]">SON</a>
              <a className="block text-[#4b6076]">CBN</a>
              <a className="block text-[#4b6076]">FMF</a>
              <a className="block text-[#4b6076]">NBS</a>
            </div>

            <div>
              <a className="block text-[#4b6076]">FIRS</a>
              <a className="block text-[#4b6076]">NESREA</a>
              <a className="block text-[#4b6076]">FRSC</a>
              <a className="block text-[#4b6076]">RMRDC</a>
              <a className="block text-[#4b6076]">NACS</a>
              <a className="block text-[#4b6076]">NFIU</a>
            </div>
          </div>

          <div
            className={`grid-cols-10 hover-nav-eDocuments absolute left-0 z-20 w-full bg-white p-8 ${activeHover == "eDocs" ? "grid" : "hidden"} text-[#4b6076]`}
            style={{
              bottom: "-13rem",
            }}
          >
            <div className="col-span-4 grid">
              <p>Nigeria Customs Service</p>

              <div className="grid-cols-2 grid">
                <div className="col-span-1">
                  <a className="block">Single Goods Declaration</a>
                  <a className="block">PAAR Consignment</a>
                  <a className="block">PAAR Dashboard</a>
                  <a className="block">e-Auction</a>
                  <a className="block">Currency Declaration Form</a>
                  <a className="block">Declaration</a>
                </div>

                <div className="col-span-1">
                  <a>T1 Viewer</a>
                  <a>Reports</a>
                  <a>User Administration</a>
                </div>
              </div>
            </div>

            <div className="col-span-2 grid">
              <p>Central Bank of Nigeria</p>
              <a>Fill FormM</a>
              <a>CBN Exchange Rate</a>
              <a>Search Approved FormMs</a>
            </div>
          </div>

          <div
            className={`grid-cols-10 hover-nav-quick absolute left-0 z-20 w-full bg-white p-8 ${activeHover == "quick" ? "grid" : "hidden"}`}
            style={{
              bottom: "-8.5rem",
            }}
          >
            <div className="text-[#4b6076] col-span-2">
              <a className="block">Guidelines and Procedures</a>
              <a className="block">Prohibited Items List During Input</a>
              <a className="block">Prohibited Items List During Export</a>
              <a className="block">Reports</a>
            </div>
          </div>

          <div
            className={`grid-cols-10 hover-nav-support absolute left-0 z-20 w-full bg-white p-8 ${activeHover == "support" ? "grid" : "hidden"}`}
            style={{
              bottom: "-7.5rem",
            }}
          >
            <div className="grid col-span-2 text-[#4b6076]">
              <a className="block">Help Desk</a>
              <a className="block">Trouble Ticket</a>
              <a className="block">PAAR Consignment Support</a>
            </div>
          </div>

          <div className="flex items-center">
            <Image
              src={logo}
              alt="logo"
              height={35.8}
              className="max-w-[200px]"
            />

            <div className="flex pl-[50px] gap-x-4">
              <a
                className="text-[#4b6076] hover:border-b-[#6cb269] hover:border-b-4 h-7 block"
                onMouseEnter={() => changeActive("agencies")}
                onMouseOut={() => changeActive("")}
              >
                Agencies
              </a>

              <a
                className="text-[#4b6076;] hover:border-b-[#6cb269]  hover:border-b-4 h-7 block"
                onMouseEnter={() => changeActive("eDocs")}
                onMouseOut={() => changeActive("")}
              >
                e-Documents
              </a>
              <a
                className="text-[#4b6076;] hover:border-b-[#6cb269]  hover:border-b-4 h-7 block"
                onMouseEnter={() => changeActive("quick")}
                onMouseOut={() => changeActive("")}
              >
                Quick Links
              </a>
              <a
                className="text-[#4b6076;] hover:border-b-[#6cb269] hover:border-b-4 h-7 block"
                onMouseEnter={() => changeActive("support")}
                onMouseOut={() => changeActive("")}
              >
                Support
              </a>
              <a
                className="text-[#4b6076;] hover:border-b-[#6cb269] hover:border-b-4 h-7 block"
                onMouseEnter={() => changeActive("downloads")}
                onMouseOut={() => changeActive("")}
              >
                Downloads
              </a>
            </div>
          </div>

          <div className="justify-self-end flex">
            <Image src={customs} alt="customs_service" height={35.8} />
          </div>
        </div>
      </div>

      <div
        className={`body bg-[#4b6076]/10 px-[28px] ${isBanner ? "pt-[10px]" : "pt-[40px]"} `}
      >
        <div
          className={`grid grid-cols-10 bg-white rounded-2xl p-4 my-4 ${isBanner ? "block" : "hidden"}`}
        >
          <a
            href="/auction"
            target="_blank"
            className={`w-full col-span-10  block text-right hover:text-red-600 text-2xl font-bold cursor-default`}
            onClick={() => {
              showBanner(false);
            }}
          >
            x
          </a>
          <div className="grid-cols-2">
            <Image
              src={megaphone}
              alt="megaphone"
              height={120}
              className="p-4"
            />
          </div>
          <div className="col-span-8 text-[14px]">
            <p className="text-[#4b6076] font-bold text-xl ">
              Informative Message
            </p>
            <p>Dear Valued User,</p>
            <p>
              To further build on the Single Window for Trade, there has been an
              improvement of the existing portal to enhance user experience. The
              improvements are the following:
            </p>
            <ul className="list-disc pl-6 my-2">
              <li>Easy Site Navigation</li>
              <li>Quick access to frequently used E-Documents</li>
              <li>Codification list for all codes used on the Portal</li>
              <li>Improved Intelligent Traders Guide and Tariff Search</li>
              <li>New Taxation Simulation Module</li>
            </ul>

            <p>
              To log in, all that is required is a REVALIDATION OF YOUR CURRENT
              CREDENTIALS. This can be done at:{" "}
              <Link href={"/auction"} target="_blank" className="text-blue-700">
                == &gt;Here{" "}
              </Link>
            </p>
            <p>
              <input type="checkbox" name="showAgain" id="showAgain" />
              <label htmlFor="showAgain">Don't show this again</label>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-10 gap-x-4">
          <div className="grid md:col-span-7 col-span-10 items-center bg-[#6cb269]/15 rounded-[40px]">
            <div className="flex gap-x-4">
              <div className="pl-[2.25rem] pt-[3rem] grid">
                <div>
                  <p className="text-xl my-8 font-bold">NAFDAC</p>
                  <p className="text-sm text-[#4b6076] my-6 min-h-[25%] w-4/5">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Minus, libero similique. Ipsam, amet! At numquam enim,
                    molestias illo delectus, aliquam error est hic iste ea
                    recusandae laboriosam odio expedita. Cum?
                  </p>

                  <a className="bg-[#6cb269] rounded-lg text-white p-3 uppercase">
                    About NAFDAC
                  </a>
                </div>

                <div className="arrows self-end flex gap-x-4 md:py-8">
                  <a className="text-[#6cb269] font-bold">&#x2190;</a>
                  <a className="text-[#6cb269] font-bold">&#x2192;</a>
                </div>
              </div>

              <div className="grid justify-end justify-self-end">
                <Image
                  src={nafdac}
                  alt="functional nafdac img"
                  className="rounded-[40px] photo h-[500px]"
                />
              </div>
            </div>
          </div>

          <div className="md:grid hidden md:col-span-3 p-4 bg-white rounded-2xl">
            <div className="flex items-center gap-x-4">
              <FaBookOpenReader className="inline text-[#6cb269] text-[24px] " />
              <p className="text-2xl">Customs Exchange Rate</p>
            </div>
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
                <a className="text-[#344134] text-xl">&#x2190;</a>
                <a className="text-[#6cb269] text-xl">&#x2192;</a>
              </div>

              <div className="col-span-1 justify-content-end grid">
                <span className="text-right inline-block w-full text-[#6cb269]">
                  See More &#x2197;
                </span>
                <button className=" w-3/4 bg-[#6cb269] rounded-md text-white p-1">
                  HELP DESK
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 my-4 gap-x-6">
          <div className="col-span-1 bg-white p-6 my-2 rounded-2xl">
            <p className="p-2 text-2xl my-2">E-Documents</p>
            <div className="grid grid-cols-2 gap-x-4">
              <div className="flex items-center border-2 border-[#4b6076]/25 p-4 rounded-xl">
                <FaRegFileLines className="inline text-[80px]" />
                <div>
                  <p className="text-lg  my-2 ">CBN FormM</p>
                  <p className="text-sm text-[#4b6076]">Fill CBN Form</p>
                </div>
              </div>

              <div className="flex items-center border-2 border-[#4b6076]/25 p-4 rounded-xl">
                <FaRegFileLines className="inline text-[80px]" />
                <div>
                  <p className="text-lg  my-2 ">NAFDAC eLicense</p>
                  <p className="text-sm text-[#4b6076]">Fill NAFDAC</p>
                </div>
              </div>
            </div>
            <div>
              <div className="arrows self-end flex gap-x-4 md:p-8">
                <a className="text-[#6cb269] font-bold">&#x2190;</a>
                <a className="text-[#6cb269] font-bold">&#x2192;</a>
              </div>
            </div>
          </div>

          <div className="col-span-1 bg-white p-6 my-2 rounded-2xl text-[14px]">
            <p className="p-2 text-2xl my-2">Tools</p>
            <div className="grid grid-cols-2 gap-x-4">
              <div className="flex items-center border-2 border-[#4b6076]/25 p-4 rounded-xl">
                <FaRegFileLines className="inline text-[80px]" />
                <div>
                  <p className="text-lg  my-2 ">Trader's Guide</p>
                  <p className="text-sm text-[#4b6076]">Fill CBN Form</p>
                </div>
              </div>

              <div className="flex items-center border-2 border-[#4b6076]/25 p-4 rounded-xl">
                <FaRegFileLines className="inline text-[80px]" />
                <div>
                  <p className="text-lg  my-2 ">NAFDAC eLicense</p>
                  <p className="text-sm text-[#4b6076]">Fill NAFDAC</p>
                </div>
              </div>
            </div>
            <div className="arrows self-end flex gap-x-4 md:p-8">
              <a className="text-[#6cb269] font-bold">&#x2190;</a>
              <a className="text-[#6cb269] font-bold">&#x2192;</a>
            </div>
          </div>
        </div>

        <div className="grid w-full justify-end justify-items-end">
          <button className="bg-[#6cb269] px-2 rounded-md text-white p-1">
            HELP DESK
          </button>
        </div>
      </div>

      <footer className="bg-white text-[#4b6076] grid grid-cols-6 items-center self-end py-1 text-[14px] pl-8">
        <div className="col-span-5 p-4">
          <a className="p-2 border-r-2  border-r-[#4b6076]/25 ">Home</a>
          <a className="p-2 border-r-2  border-r-[#4b6076]/20">
            Contact System Administrator
          </a>
          <a className="p-4">Frequently Asked Questions</a>
        </div>

        <div className="col-span-1 grid justify-self-end justify-end">
          <Image src={footy} className="h-8" alt="Footer SVG" />
        </div>
      </footer>
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
