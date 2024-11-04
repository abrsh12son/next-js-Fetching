"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Phone() {
    const [watches,setWatch]=useState([])
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("https://jsonserver.reactbd.com/watch") 
                if (!response.ok) {
                  throw new Error("fatching failed,try conection or Api")
                }  
                const watchData = await response.json();
                setWatch(watchData)
            }
            catch (error) {
                setError(error)
            }
            finally{
           setLoading(false)
            }
            
        })()
    }, [])
    if (loading) return <div className="text-center mt-32 text-4xl font-black">loading..</div>
    if (error) return <div className="text-center mt-32 text-4xl font-black"> Error:{error.message}</div>
    return (
      <div className=" min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div>
                <h1 className="text-3xl font-black text-center underline-offset-2 ">
                   Do you Wanna Good looking hands
                </h1>
                
                <ul className="grid grid-cols-4 gap-4  mt-8 justify-center items-cente ">
                    {watches.map((watch) => (
                        <li className=" border-4 border-gray-100 hover:border-gray-300/60 hover:animate-pulse hover:bg-blue-100/50 "
                            key={watch._id}>
                            <Link href={`/watch/${watch._id}`}>
                                <Image className="object-cover"
                                    src={watch.image}
                                    alt={watch.title}
                                    width={800}
                                height={800}/>
                            <div className="text-center flex flex-col gap-3">
                                <h1>{watch.title}</h1>
                                    <p> ${watch.price}</p>
                                    <p className="text-blue-700 p-1 hover:text-blue-500 text-right hover:animate-pulse">
                                        See Detailes</p>

                            
                                </div>
                                </Link>

                       </li>
                   ))}
               </ul>

       </div>
        </div>
    );
  }