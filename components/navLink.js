'use client'
import Link from "next/link";
import {usePathname} from 'next/navigation'

export function NavLink({ href, children }) {
    const path=usePathname()
    
    return (
        <div>
           
            <Link href={href}
            className={path===(href)?"text-yellow-700":""}>
                {children}
            </Link>  
        </div>
    )
}