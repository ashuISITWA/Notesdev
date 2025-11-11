import Image from "next/image";
import React from "react";

export default function HeroBanner() {
  return (
    <>
      <div className="block md:py-[80px] py-[60px]">
        <div className="w-full max-w-[1280px] mx-auto px-[15px] md:px-0">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className=" md:w-1/2 w-full">
            <div className="flex flex-col gap-6">
               <h1 className="text-4xl md:text-6xl font-bold text-gray-900">Blocks Built With Shadcn & Tailwind</h1>
               <p className="text-md text-gray-500">Fully decomposable components, all the images and background patterns are individual images or svgs that can be replaced.</p>
               <div className="block">
                <button className="bg-primary text-white px-4 py-2 rounded-md">Get Started</button>
               </div>
           
            </div>
            </div>
            <div className="md:w-1/2 w-full">
            <div className="block h-[500px]">
                
                <Image src="/placeholder-1.svg" alt="Hero Banner" className="w-full h-full object-cover" width={600} height={400} />
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
