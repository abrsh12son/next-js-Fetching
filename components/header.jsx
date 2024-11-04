import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from '../public/images/logo.png'
import { NavLink } from './navLink'


export default function Header() {
  return (
    <div className='absolute z-50 '>
      <nav className='bg-stone-100 text-stone-950 w-screen 
       font-serif text-2xl p-2 flex justify-between items-center fixed border-b-2 border-b-stone-200 '>
        <div className='text-3xl ml-8 p-1 -mt-3 animate-pulse'>
          <span className='text-yellow-500 ml-2 italic text-xl '>AB</span>
           <Link href={`/phone`}>
        <Image className="object-fill rounded-3xl shadow-lg -mt-1  hover:animate-spin"
        src={logo}
        alt="logo"pulse
        width={40}
        height={40}
          />
         
        </Link>
        </div>

        <div className='flex gap-12 mr-80 '>
          <ul className='flex gap-12  justify-end'>
            <li className='hover:first-letter: italic hover:text-stone-400'>
            <NavLink href="/">
            Home
          </NavLink>
            </li>
            <li className='hover:first-letter: italic hover:text-stone-400'>
            <NavLink href="/phone">
            Phone
          </NavLink>
            </li>
            <li className='hover:first-letter: italic hover:text-stone-400'>
            
          <NavLink href="/phoneCases">
            PhoneCase
          </NavLink>
            </li>
            <li className='hover:first-letter: italic hover:text-stone-400'>
            
            <NavLink href="/watch">
            Watch
          </NavLink>
            </li>
            <li className='hover:first-letter: italic hover:text-stone-400'>
            
            <NavLink href="/hooks">
            Hooks
          </NavLink>
              </li>
          </ul>

         

         

          
       
        </div>  
      </nav>
    </div>
  )
}
