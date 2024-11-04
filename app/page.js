import Image from "next/image";
import phones from '../public/images/phone display.png'
import Watch from '../public/images/watch.png'
import iphone from '../public/images/iphone.png'

import Link from "next/link";
// import SlideShow from "@/components/sliderShow";

export default function Home() {
  return (
    <div className="">
      {/* <div className="flex items-center justify-center w-screen mt-2 pb-5">
        <SlideShow/>
      </div> */}
    <div className="mt-20 text-center font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-extrabold shadow-sm -mt-8 mb-4 shadow-zinc-100">Welcome to  <span className="italic text-blue-900 font-black ">AB</span> shoping</h1>
      <div className="flex gap-1 items-center justify-evenly mt-3 ">
        <Link
          href={`/watch`}>
        <Image className=""
        src={Watch}
        alt="watch"
        width={200}
            height={300}
            placeholder="blur"
          />
          <h1 className="text-blue-500 hover:text-blue-600 mt-10  text-center hover:italic  p-1 text-lg">Watchs</h1>
        </Link>

        <Link href={`/phone`}>
        <Image className="object-fill   "
        src={phones}
        alt="watch"
        width={400}
        height={100}
          />
          <h1 className="text-blue-500 hover:text-blue-900 text-center animate-pulse  hover:italic items-center mt-10  p-1 text-lg">
            Phones
         </h1>

        </Link>
       
        <Link href={`/phoneCases`}>
        <Image className="-skew-x-12 "
        src={iphone}
        alt="Iphone"
        width={200}
        height={200}
      />
     <h1 className="text-blue-500 hover:text-blue-600 mt-10 text-center hover:italic items-center p-1 text-lg">Phonecases</h1>
        </Link>
    </div>


      
    </div>
    </div>
  );
}
