'use client';

import Image from 'next/image';

export default function Header() {
  return (
    <div className="">
      <div className="w-full min-h-[30px] relative flex items-center text-center text-white text-xs justify-center bg-[#00543f] p-[20px] py-[15px]">FDIC Insured - Backed by the full faith and credit of the U.S. Government</div>
      <div className="w-full min-h-[30px] relative flex items-center justify-center bg-[#12604a] p-[20px] py-[15px]">
        <Image src="https://i.imgur.com/jk1lAix.png" width={200} height={200} className="w-[150px] h-[35px]" alt="logo" />
      </div>
    </div>
  );
}
