"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function WatchDetails({ params }) {
    const { watchId } = params;
    const [watch, setWach] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (watchId) {
            (async () => {
                try {
                    const response = await fetch(`https://jsonserver.reactbd.com/watch/${watchId}`);
                    if (!response.ok) {
                        throw new Error("Fetching failed, try connection or API");
                    }
                    const WatchDetails = await response.json();
                    setWach(WatchDetails);
                } catch (error) {
                    setError(error);
                } finally {
                    setLoading(false); 
                }
            })();
        }
    }, [watchId]);
    if(loading) return <div>Loading...</div>;
    if(error) return <div>Error: {error.message}</div>;

    return (
        <div className="mt-24 ">
            <div>
                <h1 className="text-3xl font-black border-b-stone-600 text-center">{watch.title}</h1>
                { 
                    <div className="flex flex-col-2  justify-center items-center text-wrap mt-10 text-stone-950">
                        <div className=" w-fit ">
                        <Image className="object-cover -skew-x-6 "
                            src={watch.image}
                            alt={watch.title}
                            width={300}
                            height={200}
                            />

                        </div>
                        
                        <div className=" flex flex-col w-1/3 gap-5 justify-evenly items-center  ">
                            <h1 className="text-center text-2xl font-bold">{watch.title}</h1>
                            <p className="text-cenetr">{watch.brand} Watch</p>
                            <p className=" text-md font-serif leading-relaxed ml-5">
                                {watch.description}</p>
                            <p className="flex justify-around gap-10 mt-3">
                            <p className="mt-3"> Prices: ${watch.price}</p>
                           
                           <Link href={`/watch`} className="right-0 hover:border-b-4 hover:border-b-blue-400/40">
                               <button className="text-blue-900 mt-3  font-extrabold  italic  rounded-xl  hover:text-blue-600 shadow-slate-800 ">
                                   More Watchs
                               </button>   
                                   </Link>
                    </p>
                         
                       </div>
                    </div>
                }
            </div>
        </div>
    );
}