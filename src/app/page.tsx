import { FaUser } from "react-icons/fa"
import Image from "next/image"
import logo from './../assets/header_1.png'
import customs from './../assets/customs.png'
import nafdac from './../assets/Optimized-NAFDAC-1024x669-1.webp'

export default function HomePage(){


  return(
    <>
    <div>
      <div className="flex w-full bg-[#6CB269] md:px-[28px] justify-end min-h-[26px]">
        <div className="flex gap-x-2 items-center">
          <FaUser className="text-white text-[14px]" />
          <span className="text-white text-[14px]">Login</span>
        </div>
      </div>

       <div className="px-[28px] flex justify-between md:h-[82px] items-center relative w-full">
        <div className="flex items-center">
        <Image src={logo} alt="logo" height={35.8} className="max-w-[200px]"/>
        
        <div className="flex pl-[50px] gap-x-4">
        <a className="text-[#4b6076;] hover:border-b-[#6cb269] hover:border-b-2 h-7 block">Agencies</a>
        <a className="text-[#4b6076;] hover:border-b-[#6cb269] hover:border-b-2 h-7 block">e-Documents</a>
        <a className="text-[#4b6076;] hover:border-b-[#6cb269] hover:border-b-2 h-7 block">Quick Links</a>
        <a className="text-[#4b6076;] hover:border-b-[#6cb269] hover:border-b-2 h-7 block">Support</a>
        <a className="text-[#4b6076;] hover:border-b-[#6cb269] hover:border-b-2 h-7 block">Downloads</a>
        </div>
        </div>

        <div className="justify-self-end flex">
          <Image src={customs} alt='customs_service' height={35.8}/>
        </div>  
        </div>
    </div>

    <div className="body bg-[#4b6076]/20 px-[28px] py-[40px]">
      <div className="grid grid-cols-10">
         <div className="grid md:col-span-7 col-span-10 items-center bg-[#6cb269]/25 rounded-2xl  ">
         <div className="flex gap-x-4 ">
          <div className="w-1/2 pl-[5%]  pt-[5%] ">
        <p>
          NAFDAC
        </p>

        <p className="text-sm text-[#4b6076]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, libero similique. Ipsam, amet! At numquam enim, molestias illo delectus, aliquam error est hic iste ea recusandae laboriosam odio expedita. Cum?</p>

        <a className="bg-[#6cb269] text-white p-1 rounded-lg my-2 block uppercase w-2/5">
        Learn More
        </a>

        <div className="arrows flex gap-x-4 self-end md:p-8">
        <a>&#x2190;</a>
        <a>&#x2192;</a>
        </div>
        </div>

          <div className="justify-self-end flex w-1/2">
            <Image src={nafdac} alt='functional nafdac img' className="rounded-2xl max-h-[430px]" />
          </div>

          </div>


        
         </div>
         <div className="md:grid hidden md:col-span-3 p-4">
          <p>Customs Exchange Rate</p>
          <div className="grid-cols-6 grid">
            <div className="col-span-1 flag">

            </div>
            <div className="col-span-4">
              AED
            </div>
            <div>
              144.36
          </div>
         </div>
      </div>

    </div>
    </div>
    </>
  )
}