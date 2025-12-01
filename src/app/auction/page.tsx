import Image from "next/image";
import logo from "./../../assets/logo-customs.png";

export default function AuctionSitePage() {
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

        <div className="font-sans justify-items-center grid">
          <div className="p-4 w-3/4">
            <p className="text-[#ff8a00] text-4xl text-center">
              Important Notice - Auction Fraud Alert
            </p>
            <p>
              The Nigeria Customs Service would like to emphasize the following
              key points to help protect the public from falling victim to
              fraud:{" "}
            </p>
            <p>
              <span className="text-[#ff8a00]">Payment for Won Auctions:</span>{" "}
              The Nigeria Customs Service will never ask you to make payments
              for won auctions through personal bank accounts or unofficial
              channels.
            </p>
            <p>
              All payments for auctioned vehicles should be made through
              officially designated payment gateways or banks.
            </p>
            <p>
              <span className="text-[#ff8a00]">
                No Gratification Required:{" "}
              </span>{" "}
              We do not require any form of gratification or facilitation fees
              to secure a successful auction bid.
            </p>
            <p>
              <span className="text-[#ff8a00]">Official Communication:</span>{" "}
              Official communications from the Nigeria Customs Service will be
              sent through recognized and verifiable channels. Be cautious of
              unsolicited emails, phone calls, or messages claiming to be from
              us. Verify their authenticity by contacting our official
              channels.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/*Important Notice - Auction Fraud Alert
The Nigeria Customs Service would like to emphasize the following key points to help protect the public from falling victim to fraud

Payment for Won Auctions: The Nigeria Customs Service will never ask you to make payments for won auctions through personal bank accounts or unofficial channels.

All payments for auctioned vehicles should be made through officially designated payment gateways or banks.

No Gratification Required: We do not require any form of gratification or facilitation fees to secure a successful auction bid.

Official Communication: Official communications from the Nigeria Customs Service will be sent through recognized and verifiable channels. Be cautious of unsolicited emails, phone calls, or messages claiming to be from us. Verify their authenticity by contacting our official channels. */
