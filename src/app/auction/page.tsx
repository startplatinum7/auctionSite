"use client";
import Image from "next/image";
import logo from "./../../assets/logo-customs.png";
import applicants_svg from "./../../assets/milestone_1.svg";
import live from "./../../assets/live_bidding.svg";
import vehicles from "./../../assets/vehicles.svg";
import others from "./../../assets/others.svg";
import { useEffect, useState } from "react";

export default function AuctionSitePage() {
  const [applicount, updateApplicount] = useState(0);
  const [vehicount, updateVehicount] = useState(0);
  const [otherCount, updateOtherCount] = useState(0);
  const [faqOne, showFaqOne] = useState(false);
  const [faqTwo, showFaqTwo] = useState(false);
  const [FaqThree, showFaqThree] = useState(false);
  const [FaqFour, showFaqFour] = useState(false);

  useEffect(() => {
    const target = 8733;
    const step = Math.floor(target / 100);

    const interval = setInterval(() => {
      updateApplicount((current) => {
        if (current >= target) {
          clearInterval(interval); // stop interval
          return target;
        }
        return current + step;
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const target = 1156;
    const step = Math.floor(target / 80);

    const interval = setInterval(() => {
      updateVehicount((current) => {
        if (current >= target) {
          clearInterval(interval); // stop interval
          return target;
        }
        return current + step;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const target = 39;
    const step = Math.floor(target / 5);

    const interval = setInterval(() => {
      updateOtherCount((current) => {
        if (current >= target) {
          clearInterval(interval); // stop interval
          return target;
        }
        return current + step;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="body">
        <div className="flex place-items-center header w-full bg-[#27502a] text-[14px] ">
          <div className="flex justify-evenly px-8 py-2 gap-x-4 w-full justify-self-center">
            <div className="flex justify-between gap-x-4 items-center">
              <p className="text-white">
                Click here to know if your TIN is Validated
              </p>
              <p className="text-[#6C6a74] selection:bg-[#ff8a00] text-[12px]">
                {" "}
                07037891156
              </p>
              <p className="text-[#6C6a74] selection:bg-[#ff8a00]  text-[12px]">
                {" "}
                pro@customs.gov.ng
              </p>
              <p className="text-[#6C6a74] selection:bg-[#ff8a00]  text-[12px]">
                {" "}
                pro2@customs.gov.ng
              </p>
              <p className="text-[#6C6a74] selection:bg-[#ff8a00]  text-[12px]">
                {" "}
                info@customs.gov.ng
              </p>
            </div>
            <a className="text-white font-serif uppercase">Register / Login</a>
          </div>
        </div>

        <div className="flex justify-evenly items-center">
          <div>
            <Image src={logo} alt="Customs Logo" width={100} />
          </div>
          <div className="uppercase flex gap-x-4 font-serif">
            <a>HOME</a>
            <a>Current Auctions</a>
            <a>Previous Auctions</a>
            <a>Future Auctions</a>
            <a>Terms and Conditions</a>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-400 to bg-purple-500 grid justify-items-center font-serif p-4">
          <div className="w-full text-center">
            <p className="text-[78px] mt-6">e-Auction</p>
            <p className="text-[72px]">Nigeria Customs Service</p>
          </div>

          <div className="border-white p-8 border-2 justify-center w-3/4">
            <div className="flex">
              <select className="hover:border-b-[#ff8a00] p-4 w-3/12">
                <option>Vehicle Make</option>
                <option>Vehicle Make</option>
                <option>Vehicle Make</option>
                <option>Vehicle Make</option>
              </select>
              <select className="hover:border-b-[#ff8a00] p-4 w-1/4">
                <option>Vehicle Model</option>
                <option>Vehicle Make</option>
                <option>Vehicle Make</option>
              </select>
              <select className="hover:border-b-[#ff8a00] p-4 w-1/4">
                <option>Vehicle Status</option>
                <option>Available</option>
                <option>Auctioned</option>
                <option>Live Bidding</option>
              </select>
              <button className="uppercase p-4 bg-[#747c2a] hover:bg-[#ff8a00] hover:opacity-85 items-center w-1/4 flex justify-between">
                <span className="text-white text-center w-3/4">Search</span>
                <span className="text-[#ff8a00] text-2xl font-bold">&gt;</span>
              </button>
            </div>
          </div>

          <div className="flex gap-x-4">
            <button className="uppercase p-4 bg-[#747c2a] hover:bg-[#ff8a00] hover:opacity-85 items-center flex gap-x-4 justify-between">
              <span className="text-white text-center w-3/4">Requirements</span>
              <span className="text-[#ff8a00] text-2xl font-bold">&gt;</span>
            </button>

            <button className="uppercase p-4 bg-[#747c2a] hover:bg-[#ff8a00] hover:opacity-85 items-center flex gap-x-4 justify-between">
              <span className="text-white text-center">Sign In/sign Up</span>
              <span className="text-[#ff8a00] text-2xl font-bold">&gt;</span>
            </button>
          </div>
        </div>

        <div className="font-sans justify-items-center grid h-[600px]">
          <div className="p-4 w-3/4">
            <p className="text-[#ff8a00] text-4xl text-center">
              Important Notice - Auction Fraud Alert
            </p>
            <p className="text-xl text-[#747c2a] text-center my-4 font-bold">
              The Nigeria Customs Service would like to emphasize the following
              key points to help protect the public from falling victim to
              fraud:{" "}
            </p>
            <p className="text-lg my-4">
              <span className="text-[#ff8a00]">Payment for Won Auctions:</span>{" "}
              The Nigeria Customs Service will never ask you to make payments
              for won auctions through personal bank accounts or unofficial
              channels.
            </p>
            <p className="text-lg my-4">
              All payments for auctioned vehicles should be made through
              officially designated payment gateways or banks.
            </p>
            <p className="text-lg my-4">
              <span className="text-[#ff8a00]">
                No Gratification Required:{" "}
              </span>{" "}
              We do not require any form of gratification or facilitation fees
              to secure a successful auction bid.
            </p>
            <p className="text-lg my-4">
              <span className="text-[#ff8a00]">Official Communication:</span>{" "}
              Official communications from the Nigeria Customs Service will be
              sent through recognized and verifiable channels. Be cautious of
              unsolicited emails, phone calls, or messages claiming to be from
              us. Verify their authenticity by contacting our official
              channels.{" "}
            </p>
          </div>
        </div>
        <div className="milestones flex items-center font-serif justify-evenly">
          <div className="milestone">
            <Image
              src={applicants_svg}
              alt="Applicants"
              className="block fill-[#ff8a00]"
              width={120}
            />
            <p className="text-4xl text-center my-2">{applicount}</p>
            <p className="text-2xl">Applicants</p>
          </div>

          <div className="milestone">
            <Image
              src={live}
              alt="Applicants"
              className="block fill-[#ff8a00]"
              width={120}
            />
            <p className="text-4xl text-center my-2">0</p>
            <p className="text-2xl">Live Bidding</p>
          </div>

          <div className="milestone">
            <Image
              src={vehicles}
              alt="Applicants"
              className="block fill-[#ff8a00]"
              width={120}
            />
            <p className="text-4xl text-center my-2">{vehicount}</p>
            <p className="text-2xl">Vehicles</p>
          </div>

          <div className="milestone">
            <Image
              src={others}
              alt="Applicants"
              className="block fill-[#ff8a00]"
              width={120}
            />
            <p className="text-4xl text-center my-2">{otherCount}</p>
            <p className="text-2xl">Other Items</p>
          </div>
        </div>
      </div>

      <div className="faqs grid grid-cols-2 p-6 font-serif gap-x-8">
        <div className="selection:bg-[#ff8a00]">
          <p className="text-3xl">Frequently Asked Questions</p>
          <div>
            <div className="flex bg-gray-400 p-2 justify-between items-center my-4">
              <p className="w-3/4">How to register for Auction?</p>
              <span
                className="bg-[#ff8a00] p-1 text-white"
                onClick={() => showFaqOne(!faqOne)}
              >
                +
              </span>
            </div>

            <div className={`${faqOne ? "h-[120px]" : "h-0"} transition-all `}>
              <div className={`${faqOne ? "block" : "hidden"}`}>
                <p>Logon to URL auction.nigeriatradehub.gov.ng</p>
                <p> Create an account</p>
                <p>Fund your eWallet</p>
                <p>
                  Place your bid on any desired Item (Vehicle or Container){" "}
                </p>
              </div>
            </div>

            <div className="flex bg-gray-400 p-2 items-center justify-between my-4">
              <p className="w-3/4">
                What documents are required for the registration?
              </p>
              <span
                className="bg-[#ff8a00] p-1 text-white"
                onClick={() => showFaqTwo(!faqTwo)}
              >
                +
              </span>
            </div>

            <div
              className={`${faqTwo ? "h-[120px]" : "h-0"} transition-all border-b-red-400`}
            >
              <div className={`${faqTwo ? "block" : "hidden"}`}>
                <p>You don’t need any document to register you only need: </p>
                <p>1. Valid TIN</p>
                <p>2. Valid email that is linked to your TIN</p>
                <p>3. Phone Number</p>
              </div>
            </div>

            <div className="flex bg-gray-400 items-center p-2 justify-between my-4">
              <p className="w-3/4">
                Can participant view detailed information about each item,
                including condition?{" "}
              </p>
              <span className="bg-[#ff8a00] p-1 text-white">+</span>
            </div>

            <div className="flex bg-gray-400 p-2 items-center justify-between my-4">
              <p className="w-3/4">How does the bidding process work?</p>
              <span className="bg-[#ff8a00] p-1 text-white">+</span>
            </div>
          </div>
        </div>

        <div className="font-serif selection:bg-[#ff8a00]">
          <p className="text-3xl">Requirements</p>
          <div className="requirement gap-x-8">
            <div className="text-white bg-[#ff8a00] p-2 text-4xl w-[60px] h-[60px] text-center grid items-center">
              <span className="w-full">1</span>
            </div>
            <div>
              <p className="font-bold my-2">TIN Issued by FIRS</p>
              <p className="text-gray-600  ">
                Access to the Nigeria Customs Service e-Auction portal mandates
                a valid Tax Identification Number (TIN) issued by the Federal
                Inland Revenue Service (FIRS). A TIN is compulsory for
                participation in the e-Auction process. To facilitate a seamless
                experience on the portal, kindly secure your TIN from FIRS
                before accessing the platform, ensuring accurate input during
                the registration process.
              </p>
            </div>
          </div>

          <div className="requirement gap-x-8">
            <div className="text-white bg-[#ff8a00] p-2 text-4xl w-[60px] h-[60px] text-center grid items-center">
              <span className="w-full">2</span>
            </div>
            <div>
              <p className="font-bold my-2">Signup</p>
              <p className="text-gray-600 selection:bg-[#ff8a00] ">
                To participate in the exciting auction opportunities available
                on the Nigeria Customs Service eAuction portal, signing up is a
                prerequisite. Ensure you complete the registration process
                before attempting to engage in any auctions.
              </p>
            </div>
          </div>

          <div className="requirement gap-x-8">
            <div className="text-white bg-[#ff8a00] p-2 text-4xl w-[60px] h-[60px] text-center grid items-center">
              <span className="w-full">3</span>
            </div>
            <div>
              <p className="font-bold my-2">Email Requirement</p>
              <p className="text-gray-600 selection:bg-[#ff8a00] ">
                Ensure you have access to the email address Linked to the FIRS
                TIN used for registration before proceeding to register
              </p>
            </div>
          </div>

          <div className="requirement gap-x-8">
            <div className="text-white bg-[#ff8a00] p-2 text-4xl w-[60px] h-[60px] text-center grid items-center">
              <span className="w-full">4</span>
            </div>
            <div>
              <p className="font-bold my-2">Pay Administrative Charge (1000)</p>
              <p className="text-gray-600 selection:bg-[#ff8a00] ">
                Please be informed that a nominal Administrative Charge of N1000
                is applicable for a successful sign-up on the Nigeria Customs
                Service eAuction portal.
              </p>
            </div>
          </div>

          <div className="requirement gap-x-8">
            <div className="text-white bg-[#ff8a00] p-2 text-4xl w-[60px] h-[60px] text-center grid items-center">
              <span className="w-full">5</span>
            </div>
            <div>
              <p className="font-bold my-2">Bidding Fee</p>
              <p className="text-gray-600 selection:bg-[#ff8a00] ">
                Participating in the any auction opportunity on the Nigeria
                Customs Service e-Auction portal attracts a participation fee of
                N1000 with each bid.
              </p>
            </div>
          </div>

          <div className="requirement gap-x-8">
            <div className="text-white bg-[#ff8a00] p-2 text-4xl w-[60px] h-[60px] text-center grid items-center">
              <span className="w-full">6</span>
            </div>
            <div>
              <p className="font-bold my-2">Bidding Items</p>
              <p className="text-gray-600 selection:bg-[#ff8a00] ">
                You are allow to bid ONLY two items in a window but can bid each
                of those two items repeatedly to increase your chance of winning
                the item
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="flex justify-evenly gap-x-8 bg-gray-400 selection:bg-[#ff8a00] p-8 h-[350px]">
        <div className="grid">
          <p>
            <span className="text-[32px] inline text-[#ff8a00]/40 font-serif ">
              e-
            </span>
            <span className="text-[32px] inline text-[#27502a]/40 font-serif">
              Auction
            </span>
          </p>
          <p>
            This is the official e-Auction portal of the Nigeria Customs
            Service.
          </p>

          <p>Copyright ©2025 All rights reserved | ICT-MODERNIZATION NCS</p>
        </div>

        <div className="grid">
          <p className="font-bold">Quick Menu</p>
          <a className="block">Home</a>
          <a>Current Auctions</a>
          <a>Previous Auctions</a>
          <a>Future Auctions</a>
          <a>Terms and Conditions</a>
          <a>Requirements</a>
        </div>

        <div className="grid">
          <p className="font-bold">Useful Links</p>
          <a>Trader's Guide </a>
          <a>Import Prohibition List </a>
          <a>Export Prohibition List </a>
          <a>Guidelines and Procedures </a>
        </div>

        <div className="grid">
          <p className="font-bold">Contact Us </p> <p>Address:</p>
          <p>Abidjan Street,Wuse, P.M.B. 26, Zone 3 FCT Abuja</p>
          <p> Phone: 07037891156 </p>
          <p>Email: pro@customs.gov.ng</p>
        </div>
      </footer>
    </>
  );
}
