import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import pageNotfound from "../public/images/pageNotfound.png"

export default function NotFound() {
  return (
    <div className=' h-svh flex flex-col items-center mt-12 gap-3 text-3xl'>
      <Image className='bg-transparent '
        src={pageNotfound}
        alt="page not found"
        width={800}
        height={400}
      />
      <Link href={`/`}>
        <button className=' text-blue-950 shadow-lg text-md p1 mt-3 rounded-lg shadow-stone-50 hover:text-blue-700'>
          Go to home page
        </button></Link>
    </div>
  )
}
