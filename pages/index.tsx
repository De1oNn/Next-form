// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  return (
    <div className= 'bg-[#f3f4f6] h-screen w-screen flex justify-center items-center' >
      <div className="flex flex-col w-[480px] min-h-[655px] p-8 bg-white rounded-lg">
        <div className="flex flex-col w-[100%] h-[129px] justify-between">
          <span className="h-[60px] w-[60px]">
            <img src="/picture/Main 1.png"/>
          </span>
          <h2 className="text-[26px] text-foreground font-semibold text-[#202124]">
          Join Us! 😎
          </h2>
          <div className="text-[18px] whitespace-nowrap text-[#8E8E8E]">
          Please provide all current information accurately.
          </div>
        </div>
        <div className="w-[100%] h-[228px] flex flex-col justify-between">
          <div className="flex flex-col justify-between h-[68px] w-[100%]">
            <p className="block text-sm font-semibold leading-4 text-[#334155]">First name <span>*</span></p>
            <input className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]" type="Your first name" placeholder="Your first name"/>
          </div>
          <div className="flex flex-col justify-between h-[68px] w-[100%]">
            <p className="block text-sm font-semibold leading-4 text-[#334155]">Last name <span>*</span></p>
            <input className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]" type="Your last name" placeholder="Your last name" />
          </div>
          <div className="flex flex-col justify-between h-[68px] w-[100%]">
            <p className="block text-sm font-semibold leading-4 text-[#334155] font-[14px]">Username <span>*</span></p>
            <input className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]" type="Your username" placeholder="Your username"/>
          </div>
        </div>
        <div className="flex w-full gap-x-2 mt-auto">
          <button type="submit" className="flex flex-1 items-center justify-center h-[44px] gap-x-3 rounded-md bg-[#121316] text-white transition-all duration-300 hover:opacity-80">
          Continue 1/3
          </button>
        </div>
      </div>
    </div>
  );
}
