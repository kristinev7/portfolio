"use client";
import Link from 'next/link';


export default function Banner() {
  return (
    <div
      id="home"
      className="banner flex h-[250px] flex-col items-center justify-center text-center text-white p-4 md:p-8"
    >
      <p className="text-[24px] md:text-[48px]">Hello, I am Kristine -&nbsp;</p>
      <p>
        <span className="text-[24px] md:text-[48px]">software developer</span>
      </p>
    </div> 
  );
}
